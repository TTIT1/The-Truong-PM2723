// Xử lý đăng nhập
const PASSWORD = 'NHOM1';
const SEARCH_PASSWORD = 'NHOM1VS5';
const loginSection = document.getElementById('login-section');
const quizSection = document.getElementById('quiz-section');
const loginBtn = document.getElementById('login-btn');
const passwordInput = document.getElementById('password-input');
const loginError = document.getElementById('login-error');

loginBtn.onclick = function() {
    if (passwordInput.value === PASSWORD || passwordInput.value === SEARCH_PASSWORD) {
        canUseSearch = (passwordInput.value === SEARCH_PASSWORD);
        loginSection.style.display = 'none';
        quizSection.style.display = 'block';
        showSubjectSelection();
    } else {
        loginError.style.display = 'block';
    }
};

// Đảo mảng (Fisher-Yates)
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

let quizQuestions = [];
let shuffled = false;
let selectedSubjectKey = null;
let canUseSearch = false;
let selectedPart = null;

function showSubjectSelection() {
    const listHtml = (window.subjects || []).map(s => `
        <option value="${s.key}">${s.name}</option>
    `).join('');
    quizSection.innerHTML = `
        <div class="quiz-container" style="max-width:600px;margin:auto;">
            <h2>Chọn môn ôn tập</h2>
            <select id="subject-select" style="width:100%;padding:10px;margin:10px 0;">
                ${listHtml}
            </select>
            <div style="display:flex;gap:10px;justify-content:center;margin:20px 0;">
                <button id="confirm-subject-btn">Xác nhận</button>
            </div>
        </div>
    `;
    const selectEl = document.getElementById('subject-select');
    const confirmBtn = document.getElementById('confirm-subject-btn');
    confirmBtn.onclick = () => {
        selectedSubjectKey = selectEl.value;
        showPartSelection();
    };
}

function showPartSelection() {
    const bank = (window.questionBank && selectedSubjectKey) ? (window.questionBank[selectedSubjectKey] || []) : [];
    const totalQuestions = bank.length;
    const partsCount = Math.ceil(totalQuestions / 50);
    
    let partsHtml = '';
    for (let i = 0; i < partsCount; i++) {
        const startQ = i * 50 + 1;
        const endQ = Math.min((i + 1) * 50, totalQuestions);
        partsHtml += `<option value="${i}">Phần ${i + 1}: Câu ${startQ} - ${endQ} (${endQ - startQ + 1} câu)</option>`;
    }
    
    quizSection.innerHTML = `
        <div class="quiz-container" style="max-width:600px;margin:auto;">
            <h2>Chọn phần ôn tập</h2>
            <p>Môn: ${(window.subjects || []).find(s => s.key === selectedSubjectKey)?.name || ''}</p>
            <p>Tổng số câu hỏi: ${totalQuestions}</p>
            <select id="part-select" style="width:100%;padding:10px;margin:10px 0;">
                <option value="all">Tất cả câu hỏi (${totalQuestions} câu)</option>
                ${partsHtml}
            </select>
            <div style="display:flex;gap:10px;justify-content:center;margin:20px 0;">
                <button id="back-to-subject-btn">Chọn lại môn</button>
                <button id="confirm-part-btn">Xác nhận</button>
            </div>
        </div>
    `;
    
    const partSelectEl = document.getElementById('part-select');
    const confirmPartBtn = document.getElementById('confirm-part-btn');
    const backToSubjectBtn = document.getElementById('back-to-subject-btn');
    
    confirmPartBtn.onclick = () => {
        selectedPart = partSelectEl.value;
        showReadyScreen();
    };
    
    backToSubjectBtn.onclick = () => {
        showSubjectSelection();
    };
}

function showReadyScreen() {
    const bank = (window.questionBank && selectedSubjectKey) ? (window.questionBank[selectedSubjectKey] || []) : [];
    
    // Lọc câu hỏi theo phần được chọn
    let filteredQuestions = [];
    if (selectedPart === 'all' || selectedPart === null) {
        filteredQuestions = bank;
    } else {
        const partIndex = parseInt(selectedPart);
        const startIndex = partIndex * 50;
        const endIndex = Math.min(startIndex + 50, bank.length);
        filteredQuestions = bank.slice(startIndex, endIndex);
    }
    
    quizQuestions = filteredQuestions.map(q => ({
        ...q,
        shuffledOptions: q.options.slice(),
        shuffledAnswer: q.correctAnswer
    }));
    shuffled = false;
    const searchHtml = canUseSearch ? `
            <div class="search-box" style="margin:16px 0;padding:12px;border:1px solid #ddd;border-radius:8px;">
                <div style="display:flex;gap:8px;align-items:center;">
                    <input id="search-input" type="text" placeholder="Tìm câu hỏi... gõ vài từ khóa" style="flex:1;padding:10px;">
                    <button id="clear-search-btn">Xóa</button>
                </div>
                <div id="search-info" style="font-size:12px;color:#666;margin-top:6px;">
                    <strong>Tìm kiếm trong toàn bộ ${bank.length} câu hỏi của môn</strong><br>
                    Gợi ý: Không phân biệt dấu, tìm theo nội dung câu hỏi hoặc gõ a/b/c/d để lọc theo đáp án đúng.
                </div>
                <div id="search-results" style="margin-top:10px;max-height:280px;overflow:auto;"></div>
            </div>
        ` : '';

    const partInfo = selectedPart === 'all' || selectedPart === null ? 
        'Tất cả câu hỏi' : 
        `Phần ${parseInt(selectedPart) + 1}`;
    
    quizSection.innerHTML = `
        <div class="quiz-container" style="max-width:600px;margin:auto;">
            <h2>Chuẩn bị làm bài</h2>
            <p>Môn: ${(window.subjects || []).find(s => s.key === selectedSubjectKey)?.name || ''}</p>
            <p>Phần: ${partInfo} (${quizQuestions.length} câu hỏi)</p>
            <p>Bạn có thể đảo cả thứ tự câu hỏi và đáp án trước khi bắt đầu.</p>
            ${searchHtml}
            <div style="display:flex;gap:10px;justify-content:center;margin:20px 0;">
                <button id="back-to-part-btn">Chọn lại phần</button>
                <button id="shuffle-all-btn">Đảo câu hỏi & đáp án</button>
                <button id="start-quiz-btn" ${quizQuestions.length === 0 ? 'disabled' : ''}>Bắt đầu</button>
            </div>
            ${quizQuestions.length === 0 ? '<p style="color:#c00;">Chưa có câu hỏi cho phần này.</p>' : ''}
        </div>
    `;
    const backToPartBtn = document.getElementById('back-to-part-btn');
    if (backToPartBtn) {
        backToPartBtn.onclick = () => {
            showPartSelection();
        };
    }
    
    document.getElementById('shuffle-all-btn').onclick = () => {
        shuffle(quizQuestions);
        quizQuestions.forEach(q => {
            let opts = q.options.map((opt, idx) => ({opt, idx}));
            shuffle(opts);
            q.shuffledOptions = opts.map(o => o.opt);
            q.shuffledAnswer = opts.findIndex(o => o.idx === q.correctAnswer);
        });
        shuffled = true;
        alert('Đã đảo cả câu hỏi và đáp án!');
    };
    const startBtn = document.getElementById('start-quiz-btn');
    if (startBtn) {
        startBtn.onclick = () => {
            renderQuiz(quizQuestions);
        };
    }

    // Search feature (only if allowed)
    if (canUseSearch) {
    const searchInput = document.getElementById('search-input');
    const clearSearchBtn = document.getElementById('clear-search-btn');
    const searchResults = document.getElementById('search-results');
    
    // Sử dụng toàn bộ câu hỏi của môn để tìm kiếm, không giới hạn theo phần
    const allQuestionsForSearch = bank.map(q => ({
        ...q,
        shuffledOptions: q.options.slice(),
        shuffledAnswer: q.correctAnswer
    }));

    function normalizeText(text) {
        return (text || '')
            .toString()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .toLowerCase();
    }

function renderSearchResults(matches) {
        if (!matches.length) {
            searchResults.innerHTML = '<div style="color:#888;">Không có kết quả.</div>';
            return;
        }
        const html = matches.map(({ q, index }) => {
            const correctIdx = q.shuffledAnswer;
            const correctText = q.shuffledOptions[correctIdx];
            const partNumber = Math.floor(index / 50) + 1;
            const isInCurrentPart = selectedPart === 'all' || selectedPart === null || 
                                   (index >= parseInt(selectedPart) * 50 && index < parseInt(selectedPart) * 50 + 50);
            
            return `
                <div class="search-item" style="padding:10px;border:1px solid #eee;border-radius:6px;margin-bottom:8px;">
                    <div style="font-weight:600;margin-bottom:6px;">
                        Câu ${index + 1} (Phần ${partNumber}): ${q.question}
                        ${!isInCurrentPart ? '<span style="color:#ff6b35;font-size:12px;"> - Ngoài phần hiện tại</span>' : ''}
                    </div>
                    ${q.image ? `<div class="question-image"><img src="${q.image}" alt="Hình" style="max-width:100%;margin:6px 0;"></div>` : ''}
                    <div style="font-size:14px;margin-bottom:6px;">Đáp án đúng: <span style="color:#0a7a0a;font-weight:600;">${correctText}</span></div>
                    <button class=\"goto-question\" data-index=\"${index}\" style=\"font-size:13px;\">
                        ${isInCurrentPart ? 'Đi tới câu này' : 'Chuyển sang phần này'}
                    </button>
                </div>
            `;
        }).join('');
    searchResults.innerHTML = html;
    searchResults.querySelectorAll('.goto-question').forEach(btn => {
        btn.addEventListener('click', () => {
            const globalIdx = parseInt(btn.getAttribute('data-index')) || 0;
            
            // Kiểm tra xem câu hỏi có nằm trong phần hiện tại không
            const currentPartStart = selectedPart === 'all' || selectedPart === null ? 0 : parseInt(selectedPart) * 50;
            const currentPartEnd = selectedPart === 'all' || selectedPart === null ? bank.length : Math.min(currentPartStart + 50, bank.length);
            
            if (globalIdx >= currentPartStart && globalIdx < currentPartEnd) {
                // Câu hỏi nằm trong phần hiện tại, chuyển đến câu đó
                const localIdx = globalIdx - currentPartStart;
                renderQuiz(quizQuestions, false, localIdx);
            } else {
                // Câu hỏi không nằm trong phần hiện tại, hỏi người dùng có muốn chuyển phần không
                const targetPart = Math.floor(globalIdx / 50);
                const targetPartStart = targetPart * 50 + 1;
                const targetPartEnd = Math.min(targetPartStart + 49, bank.length);
                
                if (confirm(`Câu hỏi này nằm ở Phần ${targetPart + 1} (Câu ${targetPartStart}-${targetPartEnd}). Bạn có muốn chuyển sang phần đó không?`)) {
                    selectedPart = targetPart.toString();
                    showReadyScreen();
                }
            }
        });
    });
    }

function doSearch() {
    const raw = searchInput.value || '';
    const query = normalizeText(raw).trim();
        if (!query) {
            searchResults.innerHTML = '';
            return;
        }
    let answerLetterIdx = null;
    const letterMatch = query.match(/^([abcd])(\.|\)|\s|$)/i) || (query.length === 1 && query.match(/^[abcd]$/i));
    if (letterMatch) {
        const ch = (letterMatch[1] || query).toLowerCase();
        const map = { a: 0, b: 1, c: 2, d: 3 };
        answerLetterIdx = map[ch];
    }
    const results = allQuestionsForSearch
        .map((q, idx) => ({ q, idx }))
        .filter(({ q }) => {
            const qText = normalizeText(q.question);
            const optionTexts = (q.shuffledOptions || q.options || []).map(normalizeText);
            const inQuestion = qText.includes(query);
            const inOptions = optionTexts.some(t => t.includes(query));
            const byLetter = answerLetterIdx !== null && q.shuffledAnswer === answerLetterIdx;
            return inQuestion || inOptions || byLetter;
        })
        .map(({ q, idx }) => ({ q, index: idx }));
        renderSearchResults(results);
    }

    searchInput.addEventListener('input', doSearch);
    clearSearchBtn.addEventListener('click', () => {
        searchInput.value = '';
        searchResults.innerHTML = '';
        searchInput.focus();
    });
    }
}

function renderQuiz(quizQuestions, onlyWrong = false, startIndex = 0) {
    let current = Math.max(0, Math.min(startIndex || 0, quizQuestions.length - 1));
    let userAnswers = Array(quizQuestions.length).fill(null);
    let locked = Array(quizQuestions.length).fill(false);
    quizSection.innerHTML = `
        <div class="quiz-container">
            <div class="quiz-info">
                <span class="quiz-progress">Câu <span id="current-q">1</span> / ${quizQuestions.length}</span>
            </div>
            <div id="question-box"></div>
            <div class="controls">
                <button id="prev-btn" disabled>Trước</button>
                <button id="next-btn">Sau</button>
                <button id="submit-btn">Nộp bài</button>
            </div>
        </div>
        <div class="question-navigation">
            <h3>Chọn câu hỏi</h3>
            <div class="question-grid">
                ${quizQuestions.map((_, i) => `<button class="question-number" id="qnav-${i}">${i+1}</button>`).join('')}
            </div>
        </div>
    `;
    const questionBox = document.getElementById('question-box');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const submitBtn = document.getElementById('submit-btn');
    const currentQ = document.getElementById('current-q');
    let autoNextTimeout = null;

    function showQuestion(idx) {
        currentQ.textContent = idx + 1;
        const q = quizQuestions[idx];
        let optsHtml = q.shuffledOptions.map((opt, i) => {
            let cls = '';
            if (locked[idx]) {
                if (i === userAnswers[idx]) {
                    cls = (i === q.shuffledAnswer) ? 'correct' : 'incorrect';
                }
                if (i === q.shuffledAnswer && userAnswers[idx] !== q.shuffledAnswer) {
                    cls = 'correct';
                }
            } else if (userAnswers[idx] === i) {
                cls = 'user-selected';
            }
            return `<li class="option${cls ? ' ' + cls : ''}" data-idx="${i}">
                <input type="radio" name="option" id="opt${i}" ${userAnswers[idx] === i ? 'checked' : ''} ${locked[idx] ? 'disabled' : ''}>
                <label for="opt${i}">${opt}</label>
            </li>`;
        }).join('');
        questionBox.innerHTML = `
            <div class="question">
                <div class="question-text">${q.question}</div>
                ${q.image ? `<div class="question-image"><img src="${q.image}" alt="Hình minh họa" style="max-width:100%;margin:10px 0;"></div>` : ''}
                <ul class="options">${optsHtml}</ul>
            </div>
        `;
        // Bắt sự kiện chọn đáp án
        if (!locked[idx]) {
            document.querySelectorAll('.option').forEach(opt => {
                opt.onclick = function() {
                    if (locked[idx]) return;
                    const selected = parseInt(opt.getAttribute('data-idx'));
                    userAnswers[idx] = selected;
                    locked[idx] = true;
                    showQuestion(idx);
                    // Tự động chuyển câu sau 2 giây
                    if (autoNextTimeout) clearTimeout(autoNextTimeout);
                    autoNextTimeout = setTimeout(() => {
                        if (current < quizQuestions.length - 1) {
                            current++;
                            showQuestion(current);
                        }
                    }, 2000);
                };
            });
        }
        prevBtn.disabled = idx === 0;
        nextBtn.disabled = idx === quizQuestions.length - 1;
        // Highlight câu hiện tại trong navigation
        quizQuestions.forEach((_, i) => {
            const btn = document.getElementById(`qnav-${i}`);
            if (btn) {
                btn.classList.toggle('active', i === idx);
                btn.disabled = false;
            }
        });
    }

    // Navigation buttons
    quizQuestions.forEach((_, i) => {
        const btn = document.getElementById(`qnav-${i}`);
        if (btn) {
            btn.onclick = () => {
                current = i;
                showQuestion(current);
            };
        }
    });

    prevBtn.onclick = () => { if (current > 0) { current--; showQuestion(current); } };
    nextBtn.onclick = () => { if (current < quizQuestions.length - 1) { current++; showQuestion(current); } };
    submitBtn.onclick = () => {
        let correct = 0;
        let wrong = [];
        quizQuestions.forEach((q, i) => {
            if (userAnswers[i] === q.shuffledAnswer) correct++;
            else wrong.push(i);
        });
        quizSection.innerHTML = `
            <div class="final-result-container">
                <h2>Kết quả</h2>
                <p>Bạn đúng ${correct} / ${quizQuestions.length} câu.</p>
                ${wrong.length ? `<p>Câu sai: ${wrong.map(i=>i+1).join(', ')}</p>` : '<p>Xuất sắc! Bạn làm đúng hết!</p>'}
                <div style="display:flex;gap:10px;justify-content:center;margin:20px 0;flex-wrap:wrap;">
                    <button id="backToPartBtn">Chọn lại phần</button>
                    <button id="retakeCurrentBtn">Làm lại phần này</button>
                    ${wrong.length ? '<button id="retakeWrongBtn">Làm lại câu sai</button>' : ''}
                    <button onclick="location.reload()">Thoát về đầu</button>
                </div>
            </div>
        `;
        // Xử lý các nút bấm
        const backToPartBtn = document.getElementById('backToPartBtn');
        if (backToPartBtn) {
            backToPartBtn.onclick = () => {
                showPartSelection();
            };
        }
        
        const retakeCurrentBtn = document.getElementById('retakeCurrentBtn');
        if (retakeCurrentBtn) {
            retakeCurrentBtn.onclick = () => {
                showReadyScreen();
            };
        }
        
        if (wrong.length) {
            document.getElementById('retakeWrongBtn').onclick = () => {
                // Chỉ lấy lại các câu sai
                const wrongQuestions = wrong.map(i => quizQuestions[i]);
                renderQuiz(wrongQuestions, true);
            };
        }
    };
    showQuestion(current);
}

// window.questions không còn cần thiết do đã tách theo môn