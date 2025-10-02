// Ngân hàng câu hỏi theo môn học
// Định nghĩa danh sách môn và câu hỏi tương ứng

// Danh sách môn hiển thị cho người dùng chọn
window.subjects = [
    { key: 'csdl_hdt', name: 'Cơ sở dữ liệu hướng đối tượng' },
    // Thêm các môn khác tại đây khi bạn sẵn sàng, ví dụ:
    // { key: 'pm1', name: 'Môn Phần mềm 1' },
    // { key: 'pm2', name: 'Môn Phần mềm 2' },
    // { key: 'mang', name: 'Mạng máy tính' },
    // { key: 'hdh', name: 'Hệ điều hành' },
    // { key: 'ktlt', name: 'Kỹ thuật lập trình' },
];

// Câu hỏi cho từng môn (mỗi phần tử là 1 câu hỏi)
// Mỗi câu hỏi có cấu trúc: { question, options: string[], correctAnswer: number, image?: string }
window.questionBank = {
    csdl_hdt: [
        {
            question: 'Câu 1: Cơ sở dữ liệu là:',
            options: [
                'a. Là một tập hợp các dữ liệu có cấu trúc chặt chẽ về logic được lưu trữ trên các thiết bị ghi nhớ.',
                'b. Biểu diễn một phần thế giới thực.',
                'c. Được thiết kế, xây dựng và lưu trữ với một mục đích xác định và phục vụ cho nhiều người và một số ứng dụng nhất định.',
                'd. Tất cả các ý trên.'
            ],
            correctAnswer: 3 // đáp án d
        },
        {
            question: 'Câu 2: Tính dị thường của dữ liệu là:',
            options: [
                'a. Một dữ liệu nào đó được lưu trữ đi lưu trữ lại ở nhiều nơi trong cùng một CSDL, gây nên sự khác nhau về dữ liệu.',
                'b. Thông tin về cùng một đối tượng có thể khác nhau trên các tập tin khác nhau trong cùng một hệ thống thông tin.',
                'c. Là các tập tin được tạo bởi nhiều lập trình viên khác nhau nên có nhiều nội dung khác nhau về cùng một đối tượng.',
                'd. Tất cả các ý trên.'
            ],
            correctAnswer: 1 // đáp án b
        },
        {
            question: 'Câu 3: Hậu quả của việc dư thừa dữ liệu:',
            options: [
                'a. Kho lưu trữ và chi phí sản xuất lớn hơn.',
                'b. Sự không nhất quán của dữ liệu.',
                'c. Xuất hiện nhiều bản copy của cùng một dữ liệu sẽ không phù hợp lâu dài.',
                'd. Tất cả các ý trên.'
            ],
            correctAnswer: 3 // đáp án d
        },
        {
            question: 'Câu 4: Các thông tin của khách hàng đã có trong hệ thống khách hàng cuả một ngân hàng. Nay ngân hàng mở rộng thêm một số loại hình kinh doanh khác, phần mở rộng này không được tính đến trong hệ thống cũ vì vậy các thông tin của khách hàng trong hệ thống cũ không được cập nhật tự động sang hệ thống mới, nên hệ thống mới phải tự cập nhật mới. Tình huống trên làm dữ liệu trong hệ thống ngân hàng bị:',
            options: [
                'a. Dư thừa dữ liệu.',
                'b. Mất mát dữ liệu.',
                'c. Dữ liệu bị sai.',
                'd. Tất cả các ý trên.'
            ],
            correctAnswer: 0 // đáp án a
        },
        {
            question: 'Câu 5: Các thông tin của khách hàng đã có trong hệ thống khách hàng cuả một ngân hàng. Nay ngân hàng mở rộng thêm một số loại hình kinh doanh khác, phần mở rộng này đã được tính đến trong hệ thống cũ vì vậy các thông tin của khách hàng trong hệ thống được cập nhật tự động sang hệ thống mới. Tình huống trên làm dữ liệu trong hệ thống ngân hàng?',
            options: [
                'a. (1) Nhất quán.',
                'b. (2) Không bị dư thừa.',
                'c. (3) Không phải cập nhật các thông tin mới của khách hàng trong hệ thống mới.',
                'd. (1) và (2).'
            ],
            correctAnswer: 3, // đáp án d
            image: 'images/hinh1.png' // Cập nhật đường dẫn nếu ảnh khác
        },
        {
            question: 'Câu 6: Ưu điểm của cách lưu trữ dữ liệu trong CSDL là:',
            options: [
                'a. Giảm thiểu sự trùng lặp thông tin đến mức thấp nhất, do đó đảm bảo tính nhất quán, tính toàn vẹn của dữ liệu.',
                'b. Chia sẻ thông tin cho một nhóm người dùng nhất định, tiết kiệm tài nguyên, dữ liệu được truy xuất theo một cách chung.',
                'c. Khả năng bảo vệ thông tin chỉ dùng cho ứng dụng quản lý CSDL.',
                'd. Tất cả các ý trên.'
            ],
            correctAnswer: 0 // đáp án a
        },
        {
            question: 'Câu 7: Các mức của một hệ cơ sở dữ liệu là:',
            options: [
                'a. Mức vật lý, mức quan niệm, mức khung nhìn.',
                'b. Mức vật lý, mức logic, mức người dùng.',
                'c. Mức logic mức quan niệm và mức khung nhìn.',
                'd. Mức vật lý, mức khung nhìn và mức người dùng.'
            ],
            correctAnswer: 0 // đáp án a
        },
        {
            question: 'Câu 8: Mức khung nhìn trong kiến trúc cơ sở dữ liệu là mức có đặc điểm:',
            options: [
                'a. Là lớp của những người sử dụng, mức ngoài là khác nhau với mỗi người sử dụng.',
                'b. Mô tả những dữ liệu nào được lưu trữ trong CSDL và mối quan hệ giữa chúng.',
                'c. Mô tả dữ liệu được thực sự lưu trữ như thế nào trong CSDL.',
                'd. Tất cả các ý trên.'
            ],
            correctAnswer: 0 // đáp án a
        },
        {
            question: 'Câu 9: Trong hướng đối tượng, tập hợp các thực thể hay các đối tượng có cùng đặc tính được gọi là:',
            options: [
                'a. Lớp.',
                'b. Đối tượng.',
                'c. Thực thể.',
                'd. Phương thức.'
            ],
            correctAnswer: 0 // đáp án a
        },
        {
            question: 'Câu 10: Mức vật lý – Physical level, được hiểu là:',
            options: [
                'a. Mức ngoài của CSDL, gồm một số khung nhìn khác nhau của những người sử dụng đặt vào CSDL.',
                'b. Mô tả những dữ liệu nào được lưu trữ trong CSDL và có những mối quan hệ nào giữa chúng.',
                'c. Mức trong của CSDL, mô tả dữ liệu được thực sự lưu trữ như thế nào trong CSDL.',
                'd. Tất cả các ý trên.'
            ],
            correctAnswer: 2 // đáp án c
        },
        {
            question: 'Câu 11: Mức thấp nhất mô tả dữ liệu được lưu trữ như thế nào là mức:',
            options: [
                'a. Mức vật lý.',
                'b. Mức quan niệm.',
                'c. Mức logic.',
                'd. Mức ngoài.'
            ],
            correctAnswer: 0 // đáp án a
        },
        {
            question: 'Câu 12: Mức mà mô hình dữ liệu phản ánh thế giới thực để lưu trữ trong CSDL là mức nào:',
            options: [
                'a. Mức quan niệm.',
                'b. Mức người dùng.',
                'c. Mức vật lý.',
                'd. Mức vật lý và mức quan niệm.'
            ],
            correctAnswer: 0 // đáp án a
        },
        {
            question: 'Câu 13: Hệ quản trị cơ sở dữ liệu là:',
            options: [
                'a. Một hệ thống các chương trình cho phép người sử dụng giao tiếp với CSDL.',
                'b. Một hệ thống các chương trình cho phép tổ chức cơ sở dữ liệu lưu trữ trên thiết bị ghi nhớ.',
                'c. Một hệ thống các chương trình cho chúng ta các thủ tục để sửa đổi cấu trúc CSDL, cập nhật và truy vấn trên các dữ liệu.',
                'd. Tất cả các ý trên.'
            ],
            correctAnswer: 3 // đáp án d
        },
        {
            question: 'Câu 14: Hệ quản trị CSDL có các chức năng:',
            options: [
                'a. Hỗ trợ mô hình dữ liệu để tổ chức CSDL.',
                'b. Hỗ trợ một vài ngôn ngữ lập trình cao cấp cho phép người sử dụng định nghĩa cấu trúc dữ liệu, truy xuất dữ liệu.',
                'c. Quản lý giao dịch và điều khiển truy xuất.',
                'd. Có khả năng bảo vệ và phục hồi dữ liệu.',
                'e. Tất cả các ý trên.'
            ],
            correctAnswer: 4 // đáp án e
        },
        {
            question: 'Câu 15: Mô hình thực thể liên kết có vai trò gì trong việc thiết kế CSDL:',
            options: [
                'a. Giảm bớt tính tự nhiên trong cuộc cuả con ngời và gần gũi hơn với ngôn ngữ máy.',
                'b. Không có vai trò gì.',
                'c. Định nghĩa các đối tượng được cài đặt vào CSDL.',
                'd. Định nghĩa các thực thể sẽ được cài đặt vào hệ thống.'
            ],
            correctAnswer: 0 // đáp án a
        },
        {
            question: 'Câu 16: Lược đồ của CSDL là gì:',
            options: [
                'a. Toàn bộ mô tả CSDL, tương ứng với ba mức của hệ CSDL có ba loại lược đồ.',
                'b. Toàn bộ dữ liệu được lưu trữ trong CSDL tại một thời điểm nhất định, có ba loại lược đồ.',
                'c. Toàn bộ thể hiện của CSDL mô tả cách nhìn dữ liệu khác nhau của những người sử dụng khác nhau.',
                'd. Toàn bộ mô tả về cách thức lưu trữ dữ liệu vào bảng hay đối tượng của CSDL'
            ],
            correctAnswer: 0 // đáp án a
        },
        {
            question: 'Câu 17: Kiểu thực thể (Entity type) là:',
            options: [
                'a. Là khái niệm để chỉ một lớp các đối tượng có cùng đặc tính chung mà người ta muốn quản lý thông tin về nó.',
                'b. Là những cá thể của một đối tượng cụ thể trong thế giới thực.',
                'c. Là một tập hợp gồm các thực thể có tính chất giống nhau.',
                'd. Gồm các thực thể cùng được thể hiện bởi một tập các thuộc tính.'
            ],
            correctAnswer: 3 // đáp án d
        },
        {
            question: 'Câu 18: Trong các thuộc tính của thực thể, thế nào là thuộc tính phức hợp (composite attribute):',
            options: [
                'a. Thuộc tính có kiểu dữ liệu nguyên tố.',
                'b. Thuộc tính được định nghĩa bởi các thuộc tính khác.',
                'c. Thuộc tính có một giá trị cho một thực thể cụ thể.',
                'd. Thuộc tính có một tập hợp các giá trị cho cùng một thực thể.',
                'e. Thuộc tính mà giá trị của nó được suy diễn từ các thực thể liên quan.',
                'f. Thuộc tính phức tạp dùng đến khi không có thông tin về thuộc tính.'
            ],
            correctAnswer: 1 // đáp án b
        },
        {
            question: 'Câu 19: Thể hiện của CSDL là gì:',
            options: [
                'a. Toàn bộ mô tả CSDL, tương ứng với ba mức của hệ CSDL có nhiều loại thể hiện.',
                'b. Toàn bộ dữ liệu được lưu trữ trong CSDL tại một thời điểm nhất định, có nhiều thể hiện.',
                'c. Toàn bộ mô tả cách nhìn dữ liệu khác nhau của những người sử dụng khác nhau.',
                'd. Toàn bộ mô tả về cách thức lưu trữ dữ liệu vào bảng hay đối tượng của CSDL',
                'e. Tất cả các ý trên.'
            ],
            correctAnswer: 1 // đáp án b
        },
        {
            question: 'Câu 20: Thực thể (Entity) là:',
            options: [
                'a. Là khái niệm để chỉ một lớp các đối tượng có cùng đặc tính chung mà người ta muốn quản lý thông tin về nó.',
                'b. Là những cá thể của một đối tượng cụ thể trong thế giới thực.',
                'c. Là một tập hợp gồm các thực thể có tính chất giống nhau.',
                'd. Gồm các thực thể cùng được thể hiện bởi một tập các thuộc tính.'
            ],
            correctAnswer: 0 // đáp án a
        },
        {
            question: 'Câu 21: Tập thực thể (Entity set) là:',
            options: [
                'a. Là khái niệm để chỉ một lớp các đối tượng có cùng đặc tính chung mà người ta muốn quản lý thông tin về nó.',
                'b. Là những cá thể của một đối tượng cụ thể trong thế giới thực.',
                'c. Là một tập hợp gồm các thực thể có tính chất giống nhau.',
                'd. Gồm các thực thể cùng được thể hiện bởi một tập các thuộc tính.'
            ],
            correctAnswer: 2 // đáp án c
        },
        {
            question: 'Câu 22: Theo ví dụ sau: (1)NHANVIEN(Tên, Tuổi, Lương), (2)(nv1(Hà, 25, 3tr), nv2(Hưng, 30, 3 ,5tr)), (3)Ngày_sinh, (4)Công_ty. Kiểu thực thể là :',
            options: [
                'a. (1).',
                'b. (2).',
                'c. (3).',
                'd. (4).'
            ],
            correctAnswer: 0 // đáp án a
        },
        {
            question: 'Câu 23: Theo ví dụ sau: (1)NHANVIEN(Tên, Tuổi, Lương), (2)(nv1(Hà, 25, 3tr), nv2(Hưng, 30, 3 ,5tr)), (3)Ngày_sinh, (4)Công_ty. Thực thể là :',
            options: [
                'a. NHANVIEN.',
                'b. nv1 và nv2.',
                'c. Hưng và Hà.',
                'd. Công_ty.'
            ],
            correctAnswer: 1 // đáp án b
        },
        {
            question: 'Câu 24: Trong các thuộc tính của thực thể có thể lồng các thuộc tính nào vào nhau để biểu diễn một thuộc tính phức tạp (complex attribute):',
            options: [
                'a. Thuộc tính phức hợp và đa trị .',
                'b. Thuộc tính phức hợp và đơn trị.',
                'c. Thuộc tính phức hợp và đơn giản.',
                'd. Thuộc tính phức hợp và lưu trữ.',
                'e. Thuộc tính phức hợp và dẫn xuất'
            ],
            correctAnswer: 0 // đáp án a
        },
        {
            question: 'Câu 25: Thuộc tính của thực thể sử dụng giá trị rỗng (null) khi:',
            options: [
                'a. Khi một thuộc tính không có giá trị đối với một thực thể.',
                'b. Dùng để chỉ ra giá trị của thuộc tính là chưa biết.',
                'c. Chỉ ra là không có thông tin, hoặc không biết được sự tồn tại của giá trị.',
                'd. Tất cả các ý trên.'
            ],
            correctAnswer: 3 // đáp án d
        },
        {
            question: 'Câu 26: Trong phân tích thiết kế hệ thống thường phân ra làm 3 loại thuộc tính của thực thể, đó là:',
            options: [
                'a. Thuộc tính khóa, thuộc tính mô tả, thuộc tính kết nối.',
                'b. Thuộc tính định danh, thuộc tính lưu trữ, thuộc tính quan hệ.',
                'c. Thuộc tính khóa, thuộc tính định danh, thuộc tính kết nối.',
                'd. Thuộc tính định danh, thuộc tính mô tả, thuộc tính quan hệ.'
            ],
            correctAnswer: 0 // đáp án a
        },
        {
            question: 'Câu 27: Thuộc tính định danh trong mô hình thực thể liên kết được hiểu là:',
            options: [
                'a. Thuộc tính khoá.',
                'b. Thuộc tính có một giá trị.',
                'c. Thuộc tính không nhập giá trị.',
                'd. Thuộc tính đặt tên.'
            ],
            correctAnswer: 0 // đáp án a
        },
        {
            question: 'Câu 28: Cho thực thể PHIEUTHU(so_phieu, tên_khách, dia_chi_khach, ngay_ lap, ma_hang, ten_hang, so_luong,don_gia). Thuộc tính nào là định danh?',
            options: [
                'a. so_phieu.',
                'b. ngay_lap.',
                'c. ma_hang.',
                'd. khong có đáp an đúng'
            ],
            correctAnswer: 0 // đáp án a
        },
        {
            question: 'Câu 29: Thuộc tính khóa là thuộc tính mà các giá trị của nó nhận dạng một thực thể một cách duy nhất trong một kiểu thực thể. Vậy thuộc tính này gồm:',
            options: [
                'a. Một thuộc tính duy nhất.',
                'b. Một tập tối thiểu các thuộc tính.',
                'c. Ít nhất là một thuộc tính.',
                'd. Tất cả các ý trên đều đúng.'
            ],
            correctAnswer: 2 // đáp án c
        },
        {
            question: 'Câu 30: Phương thức được hiểu là:',
            options: [
                'a. Những tác động của lớp và đối tượng vào hệ thống.',
                'b. Hình thức mà lớp đó đối xử với hệ thống.',
                'c. Là những chơng trình con của hệ thống.',
                'd. Là các đoạn ‘’code’’ của chương trình.'
            ],
            correctAnswer: 0 // đáp án a
        },
        {
            question: 'Câu 31: Giả sử ta có kiểu thực thể SV(MSV, hoten, ngaysinh,gioitinh) và ta có thông tin : msv=’01’, ngaysinh={1/5/1980}, gioitinh=nam. Thông tin chi tiết bên được hiểu là gì?.',
            options: [
                'a. Một cá thể của kiểu thực thể SV.',
                'b. Một tập thực thể của kiểu thực thể SV.',
                'c. Một bản ghi trong bảng SV.',
                'd. Tất cả các ý trên đều đúng.'
            ],
            correctAnswer: 0 // đáp án a
        },
        {
            question: 'Câu 32: Trong lược đồ ER, hình e-líp cạnh đôi ký hiệu cho loại thuộc tính nào:',
            options: [
                'a. Thuộc tính đa trị.',
                'b. Thuộc tính phức hợp.',
                'c. Thuộc tính dẫn xuất.',
                'd. Không biểu diễn thuộc tính.'
            ],
            correctAnswer: 0 // đáp án a
        },
        {
            question: 'Câu 33: Tính đóng gói được hiểu là:',
            options: [
                'a. Code và dữ liệu được gói với nhau trong cùng một lớp.',
                'b. Các đối tượng đợc gói với nhau trong cùng một lớp.',
                'c. Toàn bộ chương trình tạo thành một gói thống nhất.',
                'd. Code và dữ liệu tạo thành một khối thống nhất. Nếu dùng dữ liệu thì phải sử dụng code và ngược lại.'
            ],
            correctAnswer: 0 // đáp án a
        },
        {
            question: 'Câu 34: Tính kế thừa được hiểu là:',
            options: [
                'a. Code và dữ liệu kế thừa nhau từ lớp cũ sang lớp mới.',
                'b. Có thể kế thừa code và dữ liệu từ lớp cũ sang lớp mới.',
                'c. Có thể kế thừa phương thức từ lớp cũ sang lớp mới.',
                'd. Có thể kế thừa dữ liệu từ lớp cũ sang lớp mới.'
            ],
            correctAnswer: 1 // đáp án b
        },
        {
            question: 'Câu 35: Với phiếu giao hàng trên. Lớp Hàng gồm những thuộc tính nào?.',
            options: [
                'a. HANG(mã_hàng, tên_hàng, đơn_vị, đơn_giá, số_lượng).',
                'b. HANG(mã_hàng, tên_hàng, đơn_vị).',
                'c. HANG(mã_hàng, tên_hàng, đơn_vị, đơn_giá, số_lượng, thành_tiền).',
                'd. Không có đáp án đúng.'
            ],
            correctAnswer: 0 // đáp án a
        },
        {
            question: 'Câu 36: Với phiếu giao hàng trên. Lớp Phiếu_giao_hàng gồm các thuộc tính:',
            options: [
                'a. Không có đáp án đúng.',
                'b. Số_phiếu, tên_khách, tên_hàng, Số_lượng, đơn_giá.',
                'c. Số_phiếu, tên_khách, tên_hàng, Số_lượng, đơn_giá, thành_tiền.',
                'd. Số_phiếu, tên_khách, tên_hàng, Số_lượng, đơn_giá, địa_chỉ_khách, thành_tiền.'
            ],
            correctAnswer: 0 // đáp án a
        },
        {
            question: 'Câu 37: Nếu lớp Cây_ăn_quả và lớp Cây_bóng_mát gộp thành một lớp mới lấy tên là Cây. Lớp Cây có đầy đủ các tính chất cũng như thuộc tính của 2 lớp trên. Lớp Cây đã sử dụng tính chất:',
            options: [
                'a. Tổng quát hoá.',
                'b. Chuyên biệt hóa.',
                'c. Kế thừa và tổng quát hoá.',
                'd. Kế thừa và chuyên biệt hóa',
                'e. Không có đáp án đúng.'
            ],
            correctAnswer: 0 // đáp án a
        },
        {
            question: 'Câu 38: Nếu lớp Cây được tạo thành từ các phương thức của lớp cây_ăn_quả và lớp Cây_bóng_mát thì Lớp Cây đã sử dụng tính chất của hướng đối tượng là:',
            options: [
                'a. Kế thừa.',
                'b. Tổng quát hoá.',
                'c. Nâng cấp.',
                'd. Đa hình.'
            ],
            correctAnswer: 0 // đáp án a
        },
        {
            question: 'Câu 39: Tính đóng gói được hiểu là:',
            options: [
                'a. Thuộc tính và phương thức luôn đi kèm với nhau.',
                'b. Đi với thuộc tính nào thì phải có phương thức đấy.',
                'c. Phương thức có thể không phụ thuộc vào thuộc tính.',
                'd. Thuộc tính phải nêu rõ thuộc tính đó thuộc kiểu giữ liệu gì.'
            ],
            correctAnswer: 0 // đáp án a
        },
        {
            question: 'Câu 40: Trong lược đồ ER, phát biểu không đúng về thực thể mạnh là:',
            options: [
                'a. Tồn tại độc lập với các kiểu thực thể khác.',
                'b. Có một định danh duy nhất.',
                'c. Là chủ sở hữu nếu có một kiểu thực thể yếu khác dựa vào nó.',
                'd. Thể hiện trên sơ đồ bằng hình chữ nhật cạnh đôi.'
            ],
            correctAnswer: 3 // đáp án d
        },
        {
            question: 'Câu 41: Trong lược đồ ER, phát biểu không đúng về thực thể yếu:',
            options: [
                'a. Tồn tại độc lập với các kiểu thực thể khác.',
                'b. Có một định danh duy nhất.',
                'c. Là chủ sở hữu nếu có một kiểu thực thể khác dựa vào nó.',
                'd. Thể hiện trên sơ đồ bằng hình chữ nhật cạnh đơn.',
                'e. Tất cả các ý trên'
            ],
            correctAnswer: 4 // đáp án e
        },
        {
            question: 'Câu 42: Trong lược đồ ER, phát biểu nào đúng về thực thể yếu:',
            options: [
                'a. Không thể tồn tại độc lập (1).',
                'b. Không có định danh cho bản thân (2).',
                'c. Thể hiện trên sơ đồ bằng hình chữ nhật cạnh đơn (3).',
                'd. (1) và (2).',
                'e. (2) và (3).'
            ],
            correctAnswer: 3 // đáp án d
        },
        {
            question: 'Câu 43: Mô hình dữ liệu là:',
            options: [
                'a. Là cách thức trong đó dữ liệu được lưu trữ tổ chức như một cấu trúc định sẵn với mục đích truy cập nhanh và hiệu quả trong quản lý.',
                'b. Là cách thức trong đó dữ liệu được mô tả dưới dạng bảng với các cấu trúc bảng, bộ, khóa. trường nhằm mục đích quản lý dữ liệu phục vụ truy cập nhanh.',
                'c. Là cách thức trong đó dữ liệu được mô tả dưới dạng các lớp dữ liệu với các khái niệm thuộc tính, phương thức, nhằm mục đích quản lý dữ liệu dưới dạng đối tuợng.',
                'd. Tất cả đều đúng.'
            ],
            correctAnswer: 0 // đáp án a
        },
        {
            question: 'Câu 44: Trong tuyên ngôn thứ nhất về hệ quản trị CSDL hướng đối tượng, tác giả đưa ra số lượng đặc trưng của hệ quản trị CSDL hướng đối tượng buộc phải có:',
            options: [
                'a. 13.',
                'b. 14.',
                'c. 15.',
                'd. 16.'
            ],
            correctAnswer: 0 // đáp án a
        },
        {
            question: 'Câu 45: Trong tiêu chuẩn ODMG hỗ trợ bộ sưu tập các đối tượng, gồm:',
            options: [
                'a. 3 loại.',
                'b. 4 loại.',
                'c. 5 loại.',
                'd. 6 loại.'
            ],
            correctAnswer: 2 // đáp án c
        },
        {
            question: 'Câu 46: Trong tuyên ngôn thế hệ thứ 3 của OODB ra đời vào năm:',
            options: [
                'a. 1989',
                'b. 1990',
                'c. 1993',
                'd. 1995'
            ],
            correctAnswer: 3 // đáp án d
        },
        {
            question: 'Câu 47: Thành phần chính trong ODMG 3.0 là: .',
            options: [
                'a. Mô hình đối tượng.',
                'b. Ngôn ngữ định nghĩa đối tượng.',
                'c. Ngôn ngữ truy vấn đối tượng.',
                'd. Liên kết ngôn ngữ.',
                'e. Tất cả phương án đều đúng.'
            ],
            correctAnswer: 4 // đáp án e
        },
        {
            question: 'Câu 48: So sánh sự tương ứng mô hình dữ liệu quan hệ với mô hình hướng đối tượng Class tương đương với:',
            options: [
                'a. Relation.',
                'b. Tuple.',
                'c. Column.',
                'd. Store Procedure.'
            ],
            correctAnswer: 0 // đáp án a
        },
        {
            question: 'Câu 49: So sánh sự tương ứng mô hình dữ liệu quan hệ với mô hình hướng đối tượng ObjectInstance tương đương với:',
            options: [
                'a. Relation.',
                'b. Tuple.',
                'c. Column.',
                'd. Store Procedure.'
            ],
            correctAnswer: 1 // đáp án b
        },
        {
            question: 'Câu 50: So sánh sự tương ứng mô hình dữ liệu quan hệ với mô hình hướng đối tượng Attributes tương đương với:',
            options: [
                'a. Relation.',
                'b. Tuple.',
                'c. Column.',
                'd. Store Procedure.'
            ],
            correctAnswer: 2 // đáp án c
        },
        {
            question: 'Câu 51: Có hai hướng phát triển thành CSDL hướng đối tượng đó là: .',
            options: [
                'a. Mở rộng ngôn ngữ lập trình sang CSDL hướng đối tượng và mở rộng mô hình quan hệ sang CSDL hướng đối tượng.',
                'b. Mở rộng ngôn ngữ lập trình sang CSDL hướng đối tượng và mở rộng mô hình mạng sang CSDL hướng đối tượng.',
                'c. Mở rộng ngôn ngữ lập trình sang CSDL hớng đối tượng và mở rộng mô hình kiến trúc dữ liệu sang CSDL hướng đối tượng.',
                'd. Không có phương án đúng.'
            ],
            correctAnswer: 0 // đáp án a
        },
        {
            question: 'Câu 52: Gemtone là một OODB được mở rộng theo hướng phát triển: .',
            options: [
                'a. Ngôn ngữ lập trình.',
                'b. Mô hình quan hệ.',
                'c. Mô hình mạng.',
                'd. Mô hình kiến trúc mạng.'
            ],
            correctAnswer: 0 // đáp án a
        },
        {
            question: 'Câu 53: INGRES là một OODB được mở rộng theo hướng phát triển từ:',
            options: [
                'a. Ngôn ngữ lập trình.',
                'b. Mô hình quan hệ.',
                'c. Mô hình mạng.',
                'd. Mô hình kiến trúc mạng.'
            ],
            correctAnswer: 1 // đáp án b
        },
        {
            question: 'Câu 54: ODL là ngôn ngữ đặc tả đối tượng phổ biến, có đặc điểm: .',
            options: [
                'a. Hỗ trợ tính khả chuyển của lược đồ CSDL (1).',
                'b. Hỗ trợ mọi cấu trúc ngữ nghĩa của mô hình đối tượng không cần theo chuẩn ODMG (2).',
                'c. Dùng để định nghĩa lược đồ lớp, các hoạt động và các trạng thái của tập các đối tượng trong CSDL(3).',
                'd. Dùng để xây dựng mô hình lớp, hành vi của đối tượng và duy trì tính toàn vẹn của CSDL (4).',
                'e. (1) và (2).',
                'f. (1) và (3).',
                'g. (1) và (4)'
            ],
            correctAnswer: 5 // đáp án f
        },
        {
            question: 'Câu 55: Trong ngôn ngữ định nghĩa đối tượng (ODL), từ khóa mô tả tên chung của các cá thể trong lớp đối tượng là:',
            options: [
                'a. extent + Tên.',
                'b. extends + Tên.',
                'c. exception + Tên.',
                'd. explicit + Tên.'
            ],
            correctAnswer: 0 // đáp án a
        },
        {
            question: 'Câu 56: OQL là ngôn ngữ truy vấn CSDL hướng đối tượng đã được đề xuất trong:',
            options: [
                'a. ODMG-93.',
                'b. ODMG-95.',
                'c. ODMG-92.',
                'd. ODMG-99.'
            ],
            correctAnswer: 0 // đáp án a
        },
        {
            question: 'Câu 57: OQL là ngôn ngữ truy vấn CSDL hướng đối tượng dựa trên: .',
            options: [
                'a. Mô hình đối tượng ODMG và SQL-92.',
                'b. Mô hình đối tượng OM và chuẩn ODMG-93.',
                'c. Mô hình lớp và ngôn ngữ truy vấn SQL.',
                'd. Mô hình ORM và ngôn ngữ truy vấn hướng đối tượng.'
            ],
            correctAnswer: 0 // đáp án a
        },
        {
            question: 'Câu 58: Mô hình EER là mô hình có khái niệm:',
            options: [
                'a. Tất cả khái niệm của mô hình ER.',
                'b. Lớp con và lớp cha.',
                'c. Tổng quát hóa và chuyên biệt hóa.',
                'd. Của hướng đối tượng như: tính kế thừa.',
                'e. Tất cả các ý trên.'
            ],
            correctAnswer: 4 // đáp án e
        },
        {
            question: 'Câu 59: Mô hình ER là mô hình có khái niệm:',
            options: [
                'a. Tất cả khái niệm của mô hình EER.',
                'b. Tổng quát hóa và chuyên biệt hóa.',
                'c. Thuộc tính và thực thể.',
                'd. Tất cả đều đúng.'
            ],
            correctAnswer: 2 // đáp án c
        },
        {
            question: 'Câu 60: Trong mô hình EER, khái niệm chuyên biệt hóa nghĩa là: .',
            options: [
                'a. Quá trình định nghĩa một hoặc nhiều kiểu thực thể con của một kiểu thực thể cha và xác định các mối quan hệ cha con.',
                'b. Quá trình định nghĩa một kiểu thực thể chung từ một tập các kiểu thực thể chuyên biệt.',
                'c. Quá trình xác định một tập hợp lớp con của kiểu thực thể.',
                'd. Quá trình xác định một thể hiện của kiểu thực thể cha có thể đồng thời là thể hiện của nhiều hơn một kiểu thực thể con hay không.'
            ],
            correctAnswer: 0 // đáp án a
        },
        {
            question: 'Câu 61: Trong mô hình EER, khái niệm tổng quát hóa nghĩa là: .',
            options: [
                'a. Quá trình định nghĩa một hoặc nhiều kiểu thực thể con của một kiểu thực thể cha và xác định các mối quan hệ cha con.',
                'b. Quá trình định nghĩa một kiểu thực thể chung từ một tập các kiểu thực thể chuyên biệt.',
                'c. Quá trình xác định một tập hợp lớp con của kiểu thực thể.',
                'd. Quá trình xác định một thể hiện của kiểu thực thể cha có thể đồng thời là thể hiện của nhiều hơn một kiểu thực thể con hay không.'
            ],
            correctAnswer: 1 // đáp án b
        },
        {
            question: 'Câu 62: Trong mô hình EER, quá trình tổng quát hóa dùng cách thiết kế:',
            options: [
                'a. TOP-DOWN.',
                'b. BOTTOM-UP.',
                'c. INSIDE-OUT.',
                'd. OUTSIDE-IN.'
            ],
            correctAnswer: 1 // đáp án b
        },
        {
            question: 'Câu 63: Trong mô hình EER, quá trình chuyên biệt hóa dùng cách thiết kế:',
            options: [
                'a. TOP-DOWN.',
                'b. BOTTOM-UP.',
                'c. INSIDE-OUT.',
                'd. OUTSIDE-IN.'
            ],
            correctAnswer: 0 // đáp án a
        },
        {
            question: 'Câu 64: Trong mô hình thực thể liên kết (ER) để biểu diễn một thuộc tính dẫn xuất ta dùng ký hiệu:',
            options: [
                'a. Hình e-líp cạnh nét đơn.',
                'b. Hình e-líp cạnh nét đôi.',
                'c. Hình e-líp cạnh nét rời.',
                'd. Không có thuộc tính này.'
            ],
            correctAnswer: 2 // đáp án c
        },
        {
            question: 'Câu 65: Trong mô hình thực thể liên kết (ER) để biểu diễn một thuộc tính đa trị ta sử dụng: .',
            options: [
                'a. Hình e-líp cạnh nét đơn.',
                'b. Hình e-líp cạnh nét đôi.',
                'c. Hình e-líp cạnh nét rời.',
                'd. Hình e-líp có đánh dấu.'
            ],
            correctAnswer: 1 // đáp án b
        },
        {
            question: 'Câu 66: Chọn phương án ứng với thuộc tính đa trị :',
            options: [
                'a. Giới tính',
                'b. Bằng cấp',
                'c. Trình độ',
                'd. Họ và tên'
            ],
            correctAnswer: 1 // đáp án b
        },
        {
            question: 'Câu 67: Chọn phương án ứng với thuộc tính phức hợp :',
            options: [
                'a. Giới tính',
                'b. Bằng cấp',
                'c. Trình độ',
                'd. Họ và tên'
            ],
            correctAnswer: 3 // đáp án d
        },
        {
            question: 'Câu 68: Mỗi một thực thể chuyển thành một quan hệ. Là một bước trong việc chuyển đổi:',
            options: [
                'a. Mô hình thực tế sang mô hình thực thể.',
                'b. Mô hình thực thể sang mô hình hướng đối tượng.',
                'c. Mô hình quan hệ sang mô hình hướng đối tượng.',
                'd. Mô hình thực thể sang mô hình quan hệ.'
            ],
            correctAnswer: 3 // đáp án d
        },
        {
            question: 'Câu 69: Khi chuyển đổi mô hình ER sang mô hình quan hệ, ta thực hiện. Chọn đáp án đúng nhất:',
            options: [
                'a. Với mỗi thực thể E trong lược đồ ER chuyển thành một quan hệ R chứa mọi thuộc tính của E.',
                'b. Với mỗi thực thể E trong lược đồ ER chuyển thành một quan hệ R chứa mọi thuộc tính của E và các thuộc tính trong mối quan hệ liên quan đến thực thể E đó.',
                'c. Với mỗi thực thể E trong lược đồ ER chuyển thành một quan hệ R nhưng chỉ lấy thuộc tính định danh và đa trị của thực thể E đó.',
                'd. Với mỗi thực thể E trong lợc đồ ER chuyển thành một quan hệ R chứa mọi thuộc tính của E và thuộc tính định danh của quan hệ liên quan đến thực thể đó.'
            ],
            correctAnswer: 0 // đáp án a
        },
        {
            question: 'Câu 70: Trong chuyển đổi mô hình ER sang mô hình quan hệ, ta thực hiện. Chọn đáp án đúng nhất: .',
            options: [
                'a. Với mỗi kiểu thực thể E trong lược đồ ER tạo ra một quan hệ R chứa mọi thuộc tính đơn của E. Với các thuộc tính phức hợp, chỉ lấy các thuộc tính thành phần đơn của nó. Chọn một trong các thuộc tính khóa của E làm khóa chính cho R.',
                'b. Thuộc tính định danh cuả các thực thể E trong ER được chuyển thành thuộc tính khoá trong quan hệ R.',
                'c. Thuộc tính phức hợp trong E không được đưa vào quan hệ R.',
                'd. Với mỗi kiểu liên kết hai ngôi R kiểu 1: N, hãy xác định quan hệ S biểu diễn kiểu thực thể tham gia ở phía N của kiểu liên kết. Đưa khóa chính của quan hệ T biểu diễn kiểu thực thể tham gia vào R ở phía 1 vào làm khóa ngoài trong S.'
            ],
            correctAnswer: 1 // đáp án b
        },
        {
            question: 'Câu 71: Mô hình ER (hình trên) có mấy mối quan hệ sở hữu, phụ thuộc:',
            options: [
                'a. 2.',
                'b. 3.',
                'c. 1.',
                'd. 4.'
            ],
            correctAnswer: 2, // đáp án c
            image: 'images/hinh2.png'
        },
        {
            question: 'Câu 72: Trong mô hình ER trên. Thuộc tính nào là phức hợp:',
            options: [
                'a. giám sát.',
                'b. làm việc cho.',
                'c. địa điểm.',
                'd. họ tên.'
            ],
            correctAnswer: 3, // đáp án d
            image: 'images/hinh2.png'
        },
        {
            question: 'Câu 73: Để chuyển đổi thuộc tính đa trị từ mô hình ER sang mô hình hướng đối tượng ta thực hiện: .',
            options: [
                'a. Mỗi một thuộc tính đa trị thành một lớp mới.',
                'b. Các thuộc tính đa trị trong ER thành một lớp mới.',
                'c. Giữ nguyên không cần thay đổi gì..',
                'd. Tất cả đều đúng.'
            ],
            correctAnswer: 0 // đáp án a
        },
        {
            question: 'Câu 74: Để chuyển đổi thuộc tính phức hợp trong mô hình ER sang mô hình hướng đối tượng, ta thực hiện: .',
            options: [
                'a. Chuyển thành một lớp mới.',
                'b. Chuyển đổi thuộc tính đa trị.',
                'c. Chuyển thành mối liên kết .',
                'd. Tất cả đều sai.'
            ],
            correctAnswer: 3 // đáp án d
        },
        {
            question: 'Câu 75: Chuyển đổi mỗi một thuộc tính đa trị của một thực thể thành một quan hệ mới . Là một bước trong việc chuyển đổi: .',
            options: [
                'a. Chuyển đổi mối quan hệ N: M.',
                'b. Chuyển đổi thuộc tính đa trị.',
                'c. Với kiểu liên kết n ngôi R.',
                'd. Tất cả đều đúng.'
            ],
            correctAnswer: 1 // đáp án b
        },
        {
            question: 'Câu 76: Chuyển đổi từ mô hình ER sang mô hình Quan hệ ta được các quan hệ:',
            options: [
                'a. Nhân Viên, Đơn Vị, Con, Dự án, Quản Lý, Làm việc cho, Kiểm .',
                'b. Quản lý, Nhân viên, Đơn vị, Con, Dự án.',
                'c. Nhân viên, Đơn vị, Con, Dự án.',
                'd. Tất cả đều sai.'
            ],
            correctAnswer: 2, // đáp án c
            image: 'images/hinh1.png'
        },
        {
            question: 'Câu 77: Chuyển đổi từ mô hình ER sang mô hình quan hệ . Việc chuyển đổi mối liên kết là chuyển đổi mối liên kết: .',
            options: [
                'a. N: 1.',
                'b. 1: N.',
                'c. 1: 1.',
                'd. Tất cả đều đúng.'
            ],
            correctAnswer: 3 // đáp án d
        },
        {
            question: 'Câu78: Hình trên mối quan hệ nào chứa thuộc tính riêng của quan hệ:',
            options: [
                'a. Quản lý.',
                'b. Làm việc.',
                'c. Kiểm.',
                'd. Có.'
            ],
            correctAnswer: 0, // đáp án a
            image: 'images/hinh2.png'
        },
        {
            question: 'Câu 79: Hình trên, khi chuyển đổi từ mô hình ER sang mô hình quan hệ, các mối quan hệ nào sẽ được chuyển đổi bằng cách lấy khoá chính của quan hệ này đưa vào quan hệ kia làm khoá liên kết ?',
            options: [
                'a. Làm việc cho.',
                'b. Giám sát.',
                'c. Kiểm.',
                'd. Tất cả các phương án trên.'
            ],
            correctAnswer: 3, // đáp án d
            image: 'images/hinh2.png'
        },
        {
            question: 'Câu 80: Chuyển đổi từ mô hình ER sang mô hình quan hệ hãy cho biết các mối quan hệ nào trong lược đồ ER trên sẽ được chuyển đổi thành một quan hệ mới:',
            options: [
                'a. Làm việc.',
                'b. Làm việc cho.',
                'c. Kiểm.',
                'd. Tất cả các phương án trên.'
            ],
            correctAnswer: 0, // đáp án a
            image: 'images/hinh2.png'
        },
        {
            question: 'Câu 81: Chuyển đổi từ mô hình ER sang mô hình quan hệ hãy cho biết các mối quan hệ nào trong lược đồ ER trên sẽ được chuyển đổi thành một quan hệ mới:',
            options: [
                'a. giám sát.',
                'b. Làm việc cho.',
                'c. Kiểm.',
                'd. Tất cả các phương án trên đều sai.'
            ],
            correctAnswer: 3, // đáp án d
            image: 'images/hinh2.png'
        },
        {
            question: 'Câu 82: Trong lược đồ ER Công Ty trên cho biết thuộc tính nào là thuộc tính đa trị?',
            options: [
                'a. Địa điểm.',
                'b. Họ tên.',
                'c. Con.',
                'd. Giới tính.'
            ],
            correctAnswer: 0, // giả định đáp án a
            image: 'images/hinh2.png'
        },
        {
            question: 'Câu 83: Trong lược đồ ER Công Ty trên cho biết thuộc tính nào là thuộc tính phức?',
            options: [
                'a. Địa điểm.',
                'b. Họ tên.',
                'c. Con.',
                'd. Giới tính.'
            ],
            correctAnswer: 2, // đáp án c
            image: 'images/hinh2.png'
        },
        {
            question: 'Câu 84: Trong lược đồ ER Công Ty trên cho biết quan hệ nào là quan hệ tham gia vào 3 mối liên kết trở lên?',
            options: [
                'a. Con.',
                'b. Nhân viên.',
                'c. Dự án.',
                'd. Đơn vị.'
            ],
            correctAnswer: 2, // đáp án c
            image: 'images/hinh2.png'
        },
        {
            question: 'Câu85: Khi chuyển đổi từ mô hình ER sang mô hình quan hệ tại bước thứ nhất ta được quan hệ Nhân viên (Mã số, Họ đệm, Tên, Ngày sinh, Giới tính, Lương, Địa chỉ). Nếu thực tiếp bước thứ hai ta được quan hệ Nhân viên gồm các thuộc tính sau:',
            options: [
                'a. Không có gì thay đổi.',
                'b. Nhân viên (Mã số, Họ đệm, Tên, Ngày sinh, Giới tính, Lơng, Địa chỉ, Con).',
                'c. Nhân viên (Mã số, Họ đệm, Tên, Ngày sinh, Giới tính, Lơng, Địa chỉ, Ngời quản lý).',
                'd. Tất cả đều sai.'
            ],
            correctAnswer: 0, // đáp án a
            image: 'images/hinh2.png'
        },
        {
            question: 'Câu 86: Khi chuyển đổi từ mô hình ER sang mô hình quan hệ tại bước thứ hai ta được quan hệ Nhân viên (Mã số, Họ đệm, Tên, Ngày sinh, Giới tính, Lơng, Địa chỉ). Nếu chuyển đổi sang mô hình hướng đối tượng thì quan hệ nhân viên gồm các thuộc tính:',
            options: [
                'a. Không có gì thay đổi.',
                'b. Nhân viên (Mã số, Họ đệm, Tên, Ngày sinh, Giới tính, Lơng, Địa chỉ, Ngời giám sát).',
                'c. Nhân viên (Mã số, Họ đệm, Tên, Ngày sinh, Giới tính, Lơng, Địa chỉ, Ngời quản lý).',
                'd. Tất cả đều sai.'
            ],
            correctAnswer: 0, // đáp án a
            image: 'images/hinh2.png'
        },
        {
            question: 'Câu 87: Khi chuyển đổi từ mô hình ER sang mô hình quan hệ. Để chuyển đối mối quan hệ làm việc cho đối với quan hệ Nhân viên (Mã số, Họ đệm, Tên, Ngày sinh, Giới tính, Lương, Địa chỉ, Người giám sát). Ta được quan hệ Nhân viên mới gồm thuộc tính :',
            options: [
                'a. Không có gì thay đổi.',
                'b. Nhân viên (Mã số, Họ đệm, Tên, Ngày sinh, Giới tính, Lương, Địa chỉ, Người giám sát, Mã đơn vị).',
                'c. Nhân viên (Mã số, Họ đệm, Tên, Ngày sinh, Giới tính, Lương, Địa chỉ, Người quản lý, Người giám sát).',
                'd. Tất cả đều sai'
            ],
            correctAnswer: 1, // đáp án b
            image: 'images/hinh2.png'
        },
        {
            question: 'Câu 88: Khi chuyển đổi từ mô hình ER sang mô hình quan hệ. Để chuyển đổi hai mối liên kết là Kiêm và làm việc cho của quan hệ Dự án (Mã số, Tên, Địa điểm), ta được quan hệ Dự án gồm các thuộc tính sau:',
            options: [
                'a. Không có gì thay đổi.',
                'b. Dự án(Mã số, Tên, Địa điểm, Mã đơn vị).',
                'c. Dự án(Mã số, tên, Địa điểm, Mã đơn vị, Mã nhân viên).',
                'd. Tất cả đều sai.'
            ],
            correctAnswer: 1, // đáp án b
            image: 'images/hinh2.png'
        },
        {
            question: 'Câu 89: Khi chuyển đổi từ mô hình ER sang mô hình quan hệ . Để chuyển đổi môí quan hệ Kiêm đối với quan hệ Đơnvi (Mã số, Tên, Địa điểm) ta được quan hệ Đơn vị mới gồm các thuộc tính sau:',
            options: [
                'a. Không có gì thay đổi.',
                'b. Đơn vị(Mã số, Tên, Địa điểm, Mã dự án).',
                'c. Đơn vị(Mã số, tên, Địa điểm, Mã dự án, Mã nhân viên).',
                'd. Tất cả đều sai.'
            ],
            correctAnswer: 1, // đáp án b
            image: 'images/hinh2.png'
        },
        {
            question: 'Câu 90: Khi chuyển đổi từ mô hình ER sang mô hình quan hệ tại bước thứ hai ta được quan hệ Đơn vị (Mã số, Tên, Địa điểm). Nếu thực hiện tiếp bước thứ ba ta được quan hệ Đơn vị gồm các thuộc tính sau:',
            options: [
                'a .     Không có gì thay đổi.',
                'b. Đơn vị(Mã số, Tên, Địa điểm, Ngời quản lý).',
                'c. Đơn vị(Mã số, tên, Địa điểm, Mã dự án, Mã nhân viên).',
                'd. Tất cả đều sai.'
            ],
            correctAnswer: 1, // đáp án b
            image: 'images/hinh2.png'
        },
        {
            question: 'Câu 91: Khi chuyển đổi từ mô hình ER sang mô hình quan hệ tại bước thứ ba ta được quan hệ Đơn vị (Mã số, Tên, Địa điểm, Ngời quản lý). Nếu thực hiện tiếp bước thứ tư ta được quan hệ Đơn vị gồm các thuộc tính sau:',
            options: [
                'a. Không có gì thay đổi.',
                'b. Đơn vị(Mã số, Tên, Địa điểm).',
                'c. Đơn vị(Mã số, tên, Địa điểm, Mã dự án, Mã nhân viên).',
                'd. Tất cả đều sai.'
            ],
            correctAnswer: 0, // đáp án a
            image: 'images/hinh2.png'
        },
        {
            question: 'Câu 92: Trong mô hình thực thể liên kết, thuộc tính đơn nghĩa là: .',
            options: [
                'a. Thuộc tính có kiểu dữ liệu nguyên tố.',
                'b. Thuộc tính có giá trị duy nhất cho một thực thể.',
                'c. Thuộc tính có giá trị được lưu duy nhất một lần.',
                'd. Thuộc tính có thể có nhiều giá trị đơn giản để mô tả.'
            ],
            correctAnswer: 0 // đáp án a
        },
        {
            question: 'Câu 93: Trong mô hình thực thể liên kết, thuộc tính phức hợp nghĩa là: .',
            options: [
                'a. Thuộc tính không thể phân chia được thành các thành phần nhỏ hơn.',
                'b. Thuộc tính có giá trị duy nhất cho một thực thể.',
                'c. Không có phương án đúng.',
                'd. Thuộc tính có thể có một tập giá trị cho cùng một thực thể.'
            ],
            correctAnswer: 2 // đáp án c
        },
        {
            question: 'Câu 94: Trong mô hình thực thể liên kết, thuộc tính đa trị nghĩa là: .',
            options: [
                'a. Thuộc tính không thể phân chia đợc thành các thành phần nhỏ hơn.',
                'b. Thuộc tính có giá trị duy nhất cho một thực thể cụ thể.',
                'c. Thuộc tính có kiểu tổ hợp từ nhiều thuộc tính khác.',
                'd. Thuộc tính có một tập hợp các giá trị cho cùng một thực thể.'
            ],
            correctAnswer: 3 // đáp án d
        },
        {
            question: 'Câu 95: Cho mô tả bài toán bệnh viện... Hãy cho biết các kiểu thực thể có trong bài toán trên?.',
            options: [
                'a. Bác Sĩ, Chuyên khoa. Bệnh nhân.',
                'b. Bênh viện, Bác sĩ, Chuyên khoa. Bệnh nhân, Liệu pháp điều trị.',
                'c. Không có phương án đúng.',
                'd. Bác sĩ, Khoa. Bệnh nhân.'
            ],
            correctAnswer: 0 // đáp án a
        },
        {
            question: 'Câu 96: ... Hãy cho biết các mối quan hệ có trong bài toán trên?.',
            options: [
                'a. Bác sĩ có Chuyên khoa.',
                'b. Bác sĩ Theo dõi Bệnh nhân.',
                'c. Bác sĩ điều trị Bệnh nhân.',
                'd. Tất cả đều đúng.'
            ],
            correctAnswer: 3 // đáp án d
        },
        {
            question: 'Câu 97: ... Hãy chỉ ra quan hệ có thuộc tính đi kèm?.',
            options: [
                'a. Bác sĩ có Chuyên khoa.',
                'b. Bác sĩ Theo dõi Bệnh nhân.',
                'c. Bác sĩ điều trị Bệnh nhân.',
                'd. Tất cả đều đúng.'
            ],
            correctAnswer: 2 // đáp án c
        },
        {
            question: 'Câu 98: ... Hãy chỉ ra quan hệ n phân trong bài toán trên?.',
            options: [
                'a. Bác sĩ có Chuyên khoa.',
                'b. Bác sĩ Theo dõi Bệnh nhân.',
                'c. Bác sĩ điều trị Bệnh nhân.',
                'd. Không có phơng án đúng.'
            ],
            correctAnswer: 3 // đáp án d
        },
        {
            question: 'Câu 99: Trong mô hình đối tượng ODMG bộ sưu tập các đối tượng là: .',
            options: [
                'a. Set, Bag, List, Array, Dictionary.',
                'b. Set, Tuple, Bag, List, Dictionary.',
                'c. Set, Bag, List, Record, Tuple.',
                'd. Set, List, Bag, Array, Tuple.',
                'e. Tất cả các ý trên.'
            ],
            correctAnswer: 0 // đáp án a
        },
        {
            question: 'Câu 100: Thuộc tính đa trị trong lược đồ hướng đối tượng được xác định với từ khóa:',
            options: [
                'a. Set',
                'b. Union',
                'c. Get',
                'd. Không có phương án đúng'
            ],
            correctAnswer: 0 // đáp án a
        },
        {
            question: 'Câu 101: Từ khóa Set chỉ ra rằng bộ các đối tượng yêu cầu: .',
            options: [
                'a. Không sắp xếp, không được trùng nhau.',
                'b. Không sắp xếp, được trùng nhau.',
                'c. Được sắp xếp, được thêm các phần tử.',
                'd. Được sắp xếp, được thay thế các phần tử.',
                'e. Không sắp xếp các cặp <khóa, giá trị>'
            ],
            correctAnswer: 0 // đáp án a
        },
        {
            question: 'Câu 102: Từ khóa Bag chỉ ra rằng bộ các đối tượng yêu cầu: .',
            options: [
                'a. Không sắp xếp, không được trùng nhau.',
                'b. Không sắp xếp, được trùng nhau.',
                'c. Được sắp xếp, được thêm các phần tử.',
                'd. Được sắp xếp, được thay thế các phần tử.',
                'e. Không sắp xếp các cặp <khóa, giá trị>'
            ],
            correctAnswer: 1 // đáp án b
        },
        {
            question: 'Câu 103: Từ khóa List chỉ ra rằng bộ các đối tượng yêu cầu: .',
            options: [
                'a. Không sắp xếp, không được trùng nhau.',
                'b. Không sắp xếp, được trùng nhau.',
                'c. Được sắp xếp, được thêm các phần tử.',
                'd. Được sắp xếp, được thay thế các phần tử.',
                'e. Không sắp xếp các cặp <khóa, giá trị>'
            ],
            correctAnswer: 2 // đáp án c
        },
        {
            question: 'Câu 104: Từ khóa Array chỉ ra rằng bộ các đối tượng yêu cầu: .',
            options: [
                'a. Không sắp xếp, không được trùng nhau.',
                'b. Không sắp xếp, được trùng nhau.',
                'c. Được sắp xếp, được thêm các phần tử.',
                'd. Được sắp xếp, được thay thế các phần tử.',
                'e. Không sắp xếp các cặp <khóa, giá trị>'
            ],
            correctAnswer: 3 // đáp án d
        },
        {
            question: 'Câu 105: Chuyển đổi từ mô hình ER sang mô hình hướng đối tượng gồm mấy quy tắc chuyển đổi: .',
            options: [
                'a. 3.',
                'b. 4.',
                'c. 5.',
                'd. 6.'
            ],
            correctAnswer: 2 // đáp án c
        },
        {
            question: 'Câu 106: Quy tắc chuyển đổi thứ nhất từ mô hình ER sang mô hình hớng đối tượng là : .',
            options: [
                'a. Chuyển đổi mối quan hệ is-a.',
                'b. Chuyển đổi mỗi quan hệ 1: 1.',
                'c. Chuyển đối mối quan hệ 1: n.',
                'd. Chuyển đối mối quan hệ n: m.'
            ],
            correctAnswer: 0 // đáp án a
        },
        {
            question: 'Câu 107: Quy tắc chuyển đổi thứ hai từ mô hình ER sang mô hình hớng đối tợng là : .',
            options: [
                'a. Chuyển đổi mối quan hệ is-a.',
                'b. Chuyển đổi mỗi quan hệ 1: 1.',
                'c. Chuyển đối mối quan hệ 1: n.',
                'd. Không có phương án đúng.'
            ],
            correctAnswer: 3 // đáp án d
        },
        {
            question: 'Câu 108: Quy tắc chuyển đổi thứ hai từ mô hình ER sang mô hình hướng đối tượng là : .',
            options: [
                'a. Chuyển đổi mối quan hệ nhị nguyên is-a (is-an)',
                'b. Chuyển đổi mối quan hệ nhị nguyên không thuộc tính.',
                'c. Chuyển đối mối quan hệ nhị nguyên có kèm thuộc tính.',
                'd. Không có phương án đúng.'
            ],
            correctAnswer: 1 // đáp án b
        },
        {
            question: 'Câu 109: Quan hệ nhị nguyên không thuộc tính là : .',
            options: [
                'a. Quan hệ gồm ít nhất hai thực thể tham gia và không phát sinh thuộc tính khi xảy ra mối quan hệ.',
                'b. Quan hệ phải có hai thực thể tham gia và không phát sinh thuộc tính khi xảy ra mối quan hệ.',
                'c. Quan hệ có nhiều nhất hai thực thể tham gia và không phát sinh thuộc tính khi xảy ra mối quan hệ.',
                'd. Không có phương án đúng.'
            ],
            correctAnswer: 1 // đáp án b
        },
        {
            question: 'Câu 110: Quy tắc chuyển đổi thứ ba từ mô hình ER sang mô hình hướng đối tượng là :',
            options: [
                'a. Chuyển đổi mối quan hệ nhị nguyên is-a (is-an)',
                'b. Chuyển đổi mỗi quan hệ nhị nguyên không thuộc tính.',
                'c. Chuyển đối mối quan hệ nhị nguyên có kèm thuộc tính.',
                'd. Chuyển đổi mối quan hệ nhị nguyên phản xạ.',
                'e. Không có phương án đúng.'
            ],
            correctAnswer: 2 // đáp án c
        },
        {
            question: 'Câu 111: Quy tắc chuyển đổi thứ tư từ mô hình ER sang mô hình hướng đối tượng là :',
            options: [
                'a. Chuyển đổi mối quan hệ is-a (is-an)',
                'b. Chuyển đổi mỗi quan hệ không thuộc tính.',
                'c. Chuyển đối mối quan hệ có kèm thuộc tính.',
                'd. Chuyển đổi mối quan hệ phản xạ.',
                'e. Không có phương án đúng.'
            ],
            correctAnswer: 3 // đáp án d
        },
        {
            question: 'Câu 112: Quy tắc chuyển đổi thứ năm từ mô hình ER sang mô hình hướng đối tượng là : .',
            options: [
                'a. Chuyển đổi mối quan hệ nhị nguyên is-a (is-an)',
                'b. Chuyển đổi mỗi quan hệ nhị nguyên không thuộc tính.',
                'c. Chuyển đối mối quan hệ nhị nguyên có kèm thuộc tính.',
                'd. Chuyển đổi mối quan hệ nhị nguyên phản xạ.',
                'e. Không có phương án đúng.'
            ],
            correctAnswer: 4 // đáp án e
        },
        {
            question: 'Câu 113: Quy tắc chuyển đổi thứ năm từ mô hình ER sang mô hình hướng đối tượng là : .',
            options: [
                'a. Chuyển đổi mối quan hệ is-a (is-an).',
                'b. Chuyển đổi mối quan hệ đa nguyên.',
                'c. Chuyển đối mối quan hệ phản xạ.',
                'd. Chuyển đổi mối quan hê nhị nguyên.',
                'e. Không có phương án đúng.'
            ],
            correctAnswer: 1 // đáp án b
        },
        {
            question: 'Câu 114: Nội dung của quy tắc chuyển đổi thứ nhất từ mô hình ER sang mô hình hướng đối tượng là : .',
            options: [
                'a. Nếu tập thực thể A là có mối quan hệ is-a với tập thực thể B thì lớp A sẽ kế thừa tất cả các thuộc tính trong lớp B, đồng thời bổ sung các thuộc tính riêng của lớp A. Đây chính là tính kế thừa trong mô hình dữ liệu hướng đối tượng.',
                'b. Nếu hai tập thực thể A và B có mối quan hệ R (R không có thuộc tính), thì mỗi lớp A và B, ngoài các thuộc tính trong tập thực thể A và B, sẽ được bổ sung thêm thuộc tính R ( gọi là thuộc tính mối quan hệ ).',
                'c. Xét một tập thực thể A có mối quan hệ R vào chính tập A. Nếu thông qua R mỗi đối tượng thuộc lớp A có quan hệ nhiều nhất với một đối tượng thuộc lớp A thì thuộc tính R trong lớp A sẽ được khai báo: <Tên thuộc tính R>: <Lớp A>. Trong trường hợp mỗi đối tượng thuộc lớp A có thể quan hệ với nhiều đối tượng thuộc lớp A. thì thuộc tính R có khai báo: <Tên thuộc tính R>: set(<Lớp A>).',
                'd. Không có phương án đúng.'
            ],
            correctAnswer: 0 // đáp án a
        },
        {
            question: 'Câu 115: Nội dung của quy tắc chuyển đổi thứ hai từ mô hình ER sang mô hình hướng đối tượng là : .',
            options: [
                'a. Nếu tập thực thể A là có mối quan hệ is-a với tập thực thể B thì lớp A sẽ kế thừa tất cả các thuộc tính trong lớp B, đồng thời bổ sung các thuộc tính riêng của lớp A. Đây chính là tính kế thừa trong mô hình dữ liệu hướng đối tượng.',
                'b. Nếu hai tập thực thể A và B có mối quan hệ R (R không có thuộc tính), thì mỗi lớp A và B, ngoài các thuộc tính trong tập thực thể A và B, sẽ được bổ sung thêm thuộc tính R ( gọi là thuộc tính mối quan hệ ).',
                'c. Xét một tập thực thể A có mối quan hệ R vào chính tập A. Nếu thông qua R mỗi đối tượng thuộc lớp A có quan hệ nhiều nhất với một đối tượng thuộc lớp A thì thuộc tính R trong lớp A sẽ đợc khai báo: <Tên thuộc tính R>: <Lớp A>. Trong trường hợp mỗi đối tượng thuộc lớp A có thể quan hệ với nhiều đối tượng thuộc lớp A. thì thuộc tính R có khai báo: <Tên thuộc tính R>: set(<Lớp A>).',
                'd. Không có phương án đúng.'
            ],
            correctAnswer: 1 // đáp án b
        },
        {
            question: 'Câu 116: Nội dung của quy tắc chuyển đổi thứ ba từ mô hình ER sang mô hình hướng đối tượng là : .',
            options: [
                'a. Nếu tập thực thể A là có mối quan hệ is-a với tập thực thể B thì lớp A sẽ kế thừa tất cả các thuộc tính trong lớp B, đồng thời bổ sung các thuộc tính riêng của lớp A. Đây chính là tính kế thừa trong mô hình dữ liệu hướng đối tượng.',
                'b. Nếu hai tập thực thể A và B có mối quan hệ R (R không có thuộc tính), thì mỗi lớp A và B, ngoài các thuộc tính trong tập thực thể A và B, sẽ được bổ sung thêm thuộc tính R ( gọi là thuộc tính mối quan hệ ).',
                'c. Xét một tập thực thể A có mối quan hệ R vào chính tập A. Nếu thông qua R mỗi đối tượng thuộc lớp A có quan hệ nhiều nhất với một đối tượng thuộc lớp A thì thuộc tính R trong lớp A sẽ đợc khai báo: <Tên thuộc tính R>: <Lớp A>. Trong trường hợp mỗi đối tượng thuộc lớp A có thể quan hệ với nhiều đối tượng thuộc lớp a. thì thuộc tính R có khai báo: <Tên thuộc tính R>: set(<Lớp A>).',
                'd. Không có phương án đúng.'
            ],
            correctAnswer: 2 // đáp án c
        },
        {
            question: 'Câu 117: Cho lược đồ ER trên ta phải áp dụng quy tắc số mấy để chuyển mối quan hệ is-a sang mô hình hướng đối tượng',
            options: [
                'a. Quy tắc số 1.',
                'b. Quy tắc số 2.',
                'c. Quy tắc số 3.',
                'd. Quy tắc số 4.'
            ],
            correctAnswer: 0, // đáp án a
            image: 'images/hinh3.png'
        },
        {
            question: 'Câu 118: Cho lược đồ ER trên sau khi áp dụng quy tắc chuyển đổi mô hình ER sang mô hình hướng đối tượng ta sẽ được kết quả : .',
            options: [
                'a. Tại lớp Nhân viên sẽ có thêm thuộc tính inherits: Nguoi.',
                'b. Không có gì thay đổi ở lược đồ hai lớp.',
                'c. Tại lớp Nguoi có thêm thuộc tính inherits: Nhân viên.',
                'd. Tại lớp Nhân viên sẽ có thêm thuộc tính inherits: Nguoi và tại lớp Nguoi có thêm thuộc tính inherits: Nhân viên.'
            ],
            correctAnswer: 0, // đáp án a
            image: 'images/hinh3.png'
        },
        {
            question: 'Câu 119: Cho lược đồ ER trên sau khi áp dụng quy tắc số mấy để chuyển mối quan hệ quanly sang mô hình hướng đối tượng : .',
            options: [
                'a. Quy tắc số 1.',
                'b. Quy tắc số 2.',
                'c. Quy tắc số 3.',
                'd. Quy tắc số 4.'
            ],
            correctAnswer: 1, // đáp án b
            image: 'images/hinh4.png'
        },
        {
            question: 'Câu 120: Cho lược đồ ER trên sau khi áp dụng quy tắc chuyển đổi mô hình ER sang mô hình hướng đối tượng ta sẽ được kết quả : .',
            options: [
                'a. Tại lớp Trởng khoa sẽ có thêm thuộc tính quanly: Khoa.',
                'b. Không có gì thay đổi ở lợc đồ hai lớp.',
                'c. Tại lớp Khoa có thêm thuộc tính quanly: Truongkhoa.',
                'd. Tại lớp Trưởng khoa có thêm thuộc tính quanly: Khoa và tại lớp Khoa có thêm thuộc tính quanly: Truongkhoa.'
            ],
            correctAnswer: 3, // đáp án d
            image: 'images/hinh4.png'
        },
        {
            question: 'Câu121: Cho lược đồ ER trên sau khi áp dụng quy tắc số mấy để chuyển mối quan hệ quanly sang mô hình hướng đối tượng : .',
            options: [
                'a. Quy tắc số 1.',
                'b. Quy tắc số 2.',
                'c. Quy tắc số 3.',
                'd. Quy tắc số 4.'
            ],
            correctAnswer: 1, // đáp án b
            image: 'images/hinh4.png'
        },
        {
            question: 'Câu 122: Cho lược đồ ER trên sau khi áp dụng quy tắc chuyển đổi mô hình ER sang mô hình hướng đối tượng ta sẽ được kết quả : .',
            options: [
                'a. Tại lớp Giáo viên sẽ có thêm thuộc tính Thuoc: Khoa.',
                'b. Tại lớp Giáo viên sẽ có thêm thuộc tính Thuoc: set(Khoa) và tại lớp Khoa có thêm thuộc tính Thuoc: set(Giaovien)..',
                'c. Tại lớp Khoa có thêm thuộc tính Thuoc: set(Giaovien).',
                'd. Tại lớp Giáo viên sẽ có thêm thuộc tính Thuoc: Khoa và tại lớp Khoa có thêm thuộc tính Thuoc: set(Giaovien).'
            ],
            correctAnswer: 3, // đáp án d
            image: 'images/hinh4.png'
        },
        {
            question: 'Câu 123: Cho lược đồ ER trên sau khi áp dụng quy tắc chuyển đổi mô hình ER sang mô hình hớng đối tượng ta sẽ được kết quả : .',
            options: [
                'a. Tại lớp Giáo viên sẽ có thêm thuộc tính Thuoc: set(Khoa).',
                'b. Tại lớp Giáo viên sẽ có thêm thuộc tính Thuoc: set(Khoa) và tại lớp Khoa có thêm thuộc tính Thuoc: set(Giaovien).',
                'c. Tại lớp Khoa có thêm thuộc tính Thuoc: set(Giaovien).',
                'd. Tại lớp Giáo viên sẽ có thêm thuộc tính Thuoc: Khoa và tại lớp Khoa có thêm thuộc tính Thuoc: (Giaovien).',
                'e. Không có phương án đúng.'
            ],
            correctAnswer: 4, // đáp án e
            image: 'images/hinh4.png'
        },
        {
            question: 'Câu 124: Cho lược đồ ER trên sau khi áp dụng quy tắc số mấy để chuyển mối quan hệ quanly sang mô hình hướng đối tượng : .',
            options: [
                'a. Quy tắc số 1.',
                'b. Quy tắc số 2.',
                'c. Quy tắc số 3.',
                'd. Quy tắc số 4.'
            ],
            correctAnswer: 1, // đáp án b
            image: 'images/hinh5.png'
        },
        {
            question: 'Câu 125: Cho lược đồ ER trên sau khi áp dụng quy tắc chuyển đổi mô hình ER sang mô hình hướng đối tượng ta sẽ được kết quả : .',
            options: [
                'a. Tại lớp Giáo viên sẽ có thêm thuộc tính Giang: set(Mon).',
                'b. Tại lớp Giáo viên sẽ có thêm thuộc tính Giang: set(Mon) và tại lớp Mon có thêm thuộc tính Giang: Set(Giaovien).',
                'c. Tại lớp Mon có thêm thuộc tính Giang: set(Giaovien).',
                'd. Tại lớp Giáo viên sẽ có thêm thuộc tính Thuoc: Khoa và tại lớp Khoa có thêm thuộc tính Thuoc: (Giaovien).',
                'e. Không có phương án đúng.'
            ],
            correctAnswer: 1, // đáp án b
            image: 'images/hinh5.png'
        },
        {
            question: 'Câu 126: Cho lược đồ ER trên sau khi áp dụng quy tắc số mấy để chuyển mối quan hệ phản xạ sang mô hình hướng đối tượng : .',
            options: [
                'a. Quy tắc số 1.',
                'b. Quy tắc số 2.',
                'c. Quy tắc số 3.',
                'd. Quy tắc số 4.'
            ],
            correctAnswer: 2 // đáp án c
        },
        {
            question: 'Câu 127: Cho lược đồ ER trên sau khi áp dụng quy tắc chuyển đổi mô hình ER sang mô hình hướng đối tượng ta sẽ được kết quả : .',
            options: [
                'a. Tại lớp Giáo viên sẽ có thêm thuộc tính Giang1: set(Gvien_Khoa).',
                'b. Tại lớp Giáo viên sẽ có thêm thuộc tính Giang1: set(Gvien_Khoa) và tại lớp Khoa có thêm thuộc tính Giang2: Set(Gvien_Khoa).',
                'c. Tại lớp Khoa có thêm thuộc tính Giang2: set(Gvien_Khoa).',
                'd. Tại lớp Giáo viên sẽ có thêm thuộc tính Giang1: set(Gvien_Khoa) và tại lớp Khoa có thêm thuộc tính Giang2: Set(Gvien_Khoa). Và lớp Gvien_Khoa sẽ có thuộc tính là( ID_gvien_khoa: AllID, Giang1: Giaovien, Giang2: Khoa. tongsotiet: integer).',
                'e. Không có phương án đúng.'
            ],
            correctAnswer: 3, // đáp án d
            image: 'images/hinh6.png'
        },
        {
            question: 'Câu 128: Cho lược đồ ER trên sau khi áp dụng quy tắc số mấy để chuyển mối quan hệ Giảng sang mô hình hướng đối tượng : .',
            options: [
                'a. Quy tắc số 1.',
                'b. Quy tắc số 2.',
                'c. Quy tắc số 3.',
                'd. Quy tắc số 4.'
            ],
            correctAnswer: 3, // đáp án d
            image: 'images/hinh6.png'
        },
        {
            question: 'Câu 129: Cho lược đồ ER trên, tên các thực thể có trong lược đồ là : .',
            options: [
                'a. Giaovien, Giang, Khoa.',
                'b. Giaovien, Khoa.',
                'c. Giaovien, Khoa. Tongsotiet, Giang.',
                'd. Không có phương án nào đúng.'
            ],
            correctAnswer: 1, // đáp án b
            image: 'images/hinh6.png'
        },
        {
            question: 'Câu 130: Cho lược đồ ER trên, Tongsotiet được gọi là : .',
            options: [
                'a. Thuộc tính của liên kết Giang.',
                'b. Thuộc tính của kiểu thực thể Khoa và Giáo viên.',
                'c. Thuộc tính không thể sử dụng.',
                'd. Không có phương án nào đúng.'
            ],
            correctAnswer: 0, // đáp án a
            image: 'images/hinh6.png'
        },
        {
            question: 'Câu 131: Cho lược đồ ER trên, sau khi chuyển đổi từ mô hình ER sang mô hình quan hệ ta sẽ được những quan hệ nào : .',
            options: [
                'a. Quan hệ: Giáo viên, Khoa. Gvien_Khoa (sinh ra do liên kết Giang).',
                'b. Quan hệ: Giáo viên, Khoa.',
                'c. Không thể chuyển đổi mô hình sang mô hình quan hệ.',
                'd. Không có phương án nào đúng.'
            ],
            correctAnswer: 0, // đáp án a
            image: 'images/hinh6.png'
        },
        {
            question: 'Câu 132: Cho lược đồ ER trên, để chuyển đổi liên kết Giảng sang mô hình quan hệ ta phải thực hiện bước chuyển đổi thứ : .',
            options: [
                'a. 3.',
                'b. 4.',
                'c. 5.',
                'd. 6.'
            ],
            correctAnswer: 2, // đáp án c
            image: 'images/hinh6.png'
        },
        {
            question: 'Câu 133: Cho lược đồ ER trên, để chuyển đổi liên kết Thuộc sang mô hình quan hệ ta phải thực hiện bước chuyển đổi thứ : .',
            options: [
                'a. 3.',
                'b. 4.',
                'c. 5.',
                'd. 6.'
            ],
            correctAnswer: 1, // đáp án b
            image: 'images/hinh7.png'
        },
        {
            question: 'Câu 134: Cho lược đồ ER trên, chuyển đổi lược đồ sang mô hình quan hệ ta được các quan hệ : .',
            options: [
                'a. Giáo viên, Giáo viên_thuộc_Khoa. Khoa.',
                'b. Khoa. Giáo viên.',
                'c. Khoa.',
                'd. Giáo viên.'
            ],
            correctAnswer: 0, // đáp án a
            image: 'images/hinh7.png'
        },
        {
            question: 'Câu 135: Cho lược đồ ER trên, chuyển đổi lược đồ sang mô hình quan hệ ta được các thuộc tính của quan hệ như sau : .',
            options: [
                'a. Giáo viên( id_gv, hodem, ten, tuoi, id_k); Khoa(id_k, tenkhoa. sodienthoai).',
                'b. Giáo viên(id_gv, hoten, tuoi); Khoa(id_k, tenkhoa. sodienthoai).',
                'c. Giáo viên(id_gv, hoten, tuoi); Khoa(id_k, tenkhoa. sodienthoai, id_gv).',
                'd. Không có phương án đúng.'
            ],
            correctAnswer: 0, // đáp án a
            image: 'images/hinh7.png'
        },
        {
            question: 'Câu 136: Cho lược đồ ER trên, chuyển đổi lược đồ sang mô hình quan hệ ta được các thuộc tính của quan hệ như sau : .',
            options: [
                'a. Truongkhoa(id_tk, hodem, ten, tuoi); Khoa(id_k, tenkhoa. sodienthoai, id_tk).',
                'b. Truongkhoa(id_tk, hoten, tuoi, id_khoa); Khoa(id_k, tenkhoa. sodienthoai, id_tk).',
                'c. Truongkhoa(id_tk, hodem, ten, tuoi); Quanly(id_tk, id_khoa); Khoa(id_k, tenkhoa. sodienthoai, id_tk).',
                'd. Truongkhoa(id_tk, hodem, ten, tuoi, id_khoa), Khoa(id_k, tenkhoa. sodienthoai).'
            ],
            correctAnswer: 0, // đáp án a
            image: 'images/hinh8.png'
        },
        {
            question: 'Câu 137: Cho lược đồ ER trên, chuyển đổi lược đồ sang mô hình quan hệ ta áp dụng bước chuyển đổi thứ : .',
            options: [
                'a. 3.',
                'b. 4.',
                'c. 5.',
                'd. 7.'
            ],
            correctAnswer: 0, // đáp án a
            image: 'images/hinh8.png'
        },
        {
            question: 'Câu 138: Hạt nhân của mô hình hướng đối tượng là : .',
            options: [
                'a. Lớp.',
                'b. Quan hệ.',
                'c. Thực thệ.',
                'd. Liên kết.'
            ],
            correctAnswer: 0 // đáp án a
        },
        {
            question: 'Câu 139: Trong mô hình hướng đối tượng, sự liên kết giữa các lớp đối tượng thực hiện thông qua: .',
            options: [
                'a. Liên kết.',
                'b. Kết nhập.',
                'c. Kế thừa và sự phụ thuộc.',
                'd. Tất cả các phương án đều đúng.'
            ],
            correctAnswer: 3 // đáp án d
        },
        {
            question: 'Câu 140: Trong mô hình hướng đối tượng, mỗi quan hệ giữa các lớp được thể hiện như: .',
            options: [
                'a. Kế thừa.',
                'b. Sự trừu tượng.',
                'c. Phương thức.',
                'd. Thuộc tính của lớp, gọi là thuộc tính quan hệ.'
            ],
            correctAnswer: 3 // đáp án d
        },
        {
            question: 'Câu 141: Trong mô hình hướng đối tượng, lớp A có thuộc tính mối quan hệ R với lớp B thì thuộc tính mối quan hệ R có: .',
            options: [
                'a. Kiểu dữ liệu là lớp B.',
                'b. Kiểu dữ liệu cha đợc xác định.',
                'c. Kiểu dữ liệu quan hệ.',
                'd. Kiểu dữ liệu số nguyên.'
            ],
            correctAnswer: 0 // đáp án a
        },
        {
            question: 'Câu 142: Trong mô hình hướng đối tượng, lớp A có thuộc tính mối quan hệ R với lớp B , nếu mỗi đối tượng thuộc lớp A có quan hệ với nhiều đối tượng thuộc lớp B thì R được xem như thuộc tính: .',
            options: [
                'a. Đa trị.',
                'b. Đơn trị.',
                'c. Phức hợp.',
                'd. Phát sinh.'
            ],
            correctAnswer: 0 // đáp án a
        },
        {
            question: 'Câu 143: Trong mô hình hướng đối tượng, lớp A có thuộc tính mối quan hệ R với lớp B , và thuộc tính R là thuộc tính đa trị thì trong lớp A ta sẽ khai báo: .',
            options: [
                'a. R: lớp B;',
                'b. R: set(lớp B);',
                'c. R: set(lớp A);',
                'd. R: lớp A;'
            ],
            correctAnswer: 1 // đáp án b
        },
        {
            question: 'Câu 144: Trong mô hình hướng đối tượng, để khai báo thuộc tính phức ta sử dụng từ khóa: .',
            options: [
                'a. Set;',
                'b. List;',
                'c. Bag;',
                'd. Tuple;'
            ],
            correctAnswer: 3 // đáp án d
        },
        {
            question: 'Câu 145: Trong mô hình hướng đối tượng, để khai báo thuộc tính bằng cấp ta khai báo như sau: .',
            options: [
                'a. Bằng cấp: Tuple;',
                'b. Bằng cấp: Set;',
                'c. Bằng cấp: List;',
                'd. Bằng cấp: Bag;'
            ],
            correctAnswer: 1 // đáp án b
        },
        {
            question: 'Câu 146: Trong mô hình hướng đối tượng, gọi C1 là siêu lớp (superclass) của lớp C2 có nghĩa là: .',
            options: [
                'a. C1 là cha của lớp C2;',
                'b. C1 là con của lớp C2;',
                'c. C1 là anh em của lớp C2;',
                'd. Tất cả đều sai;'
            ],
            correctAnswer: 0 // đáp án a
        },
        {
            question: 'Câu 147: Trong lược đồ CSDL hướng đối tượng, để mô tả quan hệ kế thừa (sự phân cấp lớp) ta sử dụng: .',
            options: [
                'a. Cung nét dày dạng mũi tên;',
                'b. Cung nét mỏng dạng mũi tên;',
                'c. Cung nét dày;',
                'd. Cung nét mỏng;'
            ],
            correctAnswer: 0, // đáp án a
            image: 'images/hinh9.png'
        },
        {
            question: 'Câu 148: Trong lược đồ CSDL hướng đối tượng, để mô tả mỗi quan hệ giữa các lớp bằng: .',
            options: [
                'a. Cung nét dày dạng mũi tên;',
                'b. Cung nét mỏng dạng mũi tên;',
                'c. Cung nét dày;',
                'd. Cung nét mỏng;'
            ],
            correctAnswer: 1 // đáp án b
        },
        {
            question: 'Câu 149: Trong lược đồ CSDL hướng đối tượng, kiểu phạm vi được bảo vệ đánh dấu bằng dấu: .',
            options: [
                'a. dấu +.',
                'b. dấu #.',
                'c. dấu -.',
                'd. dấu ~.'
            ],
            correctAnswer: 1 // đáp án b
        },
        {
            question: 'Câu 150: Hãy cho biết, hình vẽ trên mô phỏng cho: .',
            options: [
                'a. Kế thừa bội.',
                'b. Kế thừa đơn.',
                'c. Sai vì sử dụng cung mũi tên.',
                'd. Tất cả các phương án đều sai.'
            ],
            correctAnswer: 0, // đáp án a
            image: 'images/hinh10.png'
        },
        {
            question: 'Câu 151: Mối quan hệ kết tập là một kiểu kết hợp đặc biệt được sử dụng để: .',
            options: [
                'a. Mô hình hóa mối quan hệ tổng thể – các thành phần của nó.',
                'b. Mô hình hóa mối quan hệ phân biệt độc lập giữa hai lớp đối tượng.',
                'c. Mô hình hóa mối quan hệ cá thể – thể hiện của hai lớp cha – con.',
                'd. Tất cả các phương án đều sai.'
            ],
            correctAnswer: 0 // đáp án a
        },
        {
            question: 'Câu 152: Kết tập là một kiểu kết hợp đặc biệt, gồm có: .',
            options: [
                'a. Kết tập cơ sở, kết tập hợp thành.',
                'b. Kết tập cơ sở, kết tập hợp thành, kết tập phản xạ.',
                'c. Kết tập phản xạ, kết tập hợp thành.',
                'd. Kết tập phản xạ, kết tập hợp thành, kết tập bộ phận.'
            ],
            correctAnswer: 0 // đáp án a
        },
        {
            question: 'Câu 153: Cho lược đồ ER như trên, sau khi thực hiện chuyển đổi sang mô hình hướng đối tượng bằng quy tắc số 4 ta sẽ được lớp Người gồm các thuộc tính: .',
            options: [
                'a. id: allID, Hoten: String, Tuoi: Integer, Con: Set(Nguoi), Cha. Me: Nguoi;',
                'b. id: allID, Hoten: String, Tuoi: Integer, Cha. Me: Nguoi.',
                'c. id: allID, Hoten: String, Tuoi: Integer, Con: Set(Nguoi).',
                'd. id: allID, Hoten: String, Tuoi: Integer,'
            ],
            correctAnswer: 0, // đáp án a
            image: 'images/hinh11.png'
        },
        {
            question: 'Câu 154: Cho lược đồ ER như trên, sau khi thực hiện chuyển đổi sang mô hình quan hệ ta sẽ được quan hệ Người: .',
            options: [
                'a. Nguoi(id, hoten, tuoi, id_cha, id_me).',
                'b. Nguoi(id, hoten, tuoi, id_cha, id_me, id_con).',
                'c. Nguoi(id, hoten, tuoi, id_cha).',
                'd. Nguoi(id, hoten, tuoi).'
            ],
            correctAnswer: 0, // đáp án a
            image: 'images/hinh11.png'
        },
        {
            question: 'Câu 155: Cho lược đồ ER như trên, sau khi thực hiện chuyển đổi sang mô hình hướng đối tượng ta sẽ được các lớp: .',
            options: [
                'a. Giáo viên, Lớp, Môn học, Lịch dạy;',
                'b. Giáo viên, Lớp, Môn học.',
                'c. Giáo viên, Lịch dạy, Môn học.',
                'd. Giáo viên, Lịch dạy, Lớp.'
            ],
            correctAnswer: 0, // đáp án a
            image: 'images/hinh12.png'
        },
        {
            question: 'Câu 156: Cho lược đồ ER như trên, sau khi thực hiện chuyển đổi sang mô hình hướng đối tượng ta sẽ áp dụng quy tắc chuyển đổi thứ: .',
            options: [
                'a. 5.',
                'b. 4.',
                'c. 3.',
                'd. 2.'
            ],
            correctAnswer: 0, // đáp án a
            image: 'images/hinh12.png'
        },
        {
            question: 'Câu 157: Cho lược đồ ER như trên, sau khi thực hiện chuyển đổi sang mô hình hướng đối tượng ta sẽ áp dụng quy tắc chuyển đổi thứ 5, quy tắc này làm phát sinh thêm một lớp mới từ quan hệ Dạy gọi là Lịch Dạy, Lịch Dạy sẽ gồm những thuộc tính gì? .',
            options: [
                'a. Thời gian: String, Giang: Giaovien, Gomco: Monhoc, Botri: Lop.',
                'b. Thời gian: String, Gomco: Monhoc, Botri: Lop.',
                'c. Giang: Giaovien, Gomco: Monhoc, Botri: Lop.',
                'd. Thời gian: String, Giang: Giaovien, Gomco: Monhoc.'
            ],
            correctAnswer: 0, // đáp án a
            image: 'images/hinh12.png'
        },
        {
            question: 'Câu 158: Cho lược đồ ER như trên, quan hệ Dạy được gọi là: .',
            options: [
                'a. Quan hệ đa nguyên.',
                'b. Quan hệ nhị nguyên.',
                'c. Quan hệ phức hợp.',
                'd. Quan hệ đa trị.'
            ],
            correctAnswer: 0, // đáp án a
            image: 'images/hinh12.png'
        },
        {
            question: 'Câu 159: Cho lược đồ ER như trên, thực hiện chuyển đổi sang mô hình quan hệ ta sẽ được số thực thể là: .',
            options: [
                'a. 4.',
                'b. 5.',
                'c. 3.',
                'd. 2.'
            ],
            correctAnswer: 0, // đáp án a
            image: 'images/hinh12.png'
        },
        {
            question: 'Câu 160: Cho lược đồ ER như trên, thực hiện chuyển đổi sang mô hình quan hệ sẽ phát sinh thêm một quan hệ mới là quan hệ Lịch dạy, quan hệ này gồm những thuộc tính: .',
            options: [
                'a. id_gv, id_lop, id_monhoc.',
                'b. id_gv, id_lop, id_monhoc, thoigian.',
                'c. id_lop, thoigian.',
                'd. id_lop, id_gv, id_monhoc, thoigian, hoten, sotiet.'
            ],
            correctAnswer: 1, // đáp án b
            image: 'images/hinh12.png'
        },
        {
            question: 'Câu 161: Chuyển mỗi thực thể thành một quan hệ là việc?.',
            options: [
                'a. Chuyển tên thực thể thành tên quan hệ.',
                'b. Chuyển các thuộc tính của thực thể thành thuộc tính của quan hệ.',
                'c. Chuyển thuộc tính định danh của thực thể thành thuộc tính khoá của quan hệ.',
                'd. Tất cả các ý trên.'
            ],
            correctAnswer: 3, // đáp án d
            image: 'images/hinh13.png'
        },
        {
            question: 'Câu 162: Với phiếu giao hàng trên ta tìm được những thực thể nào?.',
            options: [
                'a. DM_KHACH,DM_HANG.',
                'b. MD_KHACH,DM_HANG, PHIEU_GIAO_HANG.',
                'c. Không có đáp án đúng.',
                'd. PHIEU_GIAO_HANG, DM_KHACH.'
            ],
            correctAnswer: 0, // đáp án a
            
        },
        {
            question: 'Câu 163: Cho lược đồ ER như trên, các quan hệ sinh ra tại bước chuyển đối thứ nhất từ mô hình ER sang mô hình quan hệ là:',
            options: [
                'a. Bác sĩ, Chuyên khoa, Bệnh nhân',
                'b. Bác sĩ, Chuyên khoa, Bệnh nhân, Liệu pháp điều trị',
                'c. Bệnh nhân, Bác Sĩ, Liệu pháp điều trị',
                'd. Tất cả đều đúng'
            ],
            correctAnswer: 0, // đáp án a
            image: 'images/hinh14.png'
        },
        {
            question: 'Câu 164: Cho lược đồ ER như trên, các quan hệ sinh ra sau khi thực hiện bảy bước chuyển đổi từ mô hình ER sang mô hình quan hệ là:',
            options: [
                'a. Bác sĩ, Chuyên khoa, Bệnh nhân',
                'b. Bác sĩ, Chuyên khoa, Bệnh nhân, Bảng theo dõi điều trị',
                'c. Bệnh nhân, Bác Sĩ, Liệu pháp điều trị',
                'd. Tất cả đều đúng'
            ],
            correctAnswer: 1, // đáp án b
            image: 'images/hinh14.png'
        },
        {
            question: 'Câu 165: Cho lược đồ ER như trên, các lớp đối tượng sinh ra sau khi thực hiện chuyển đổi từ mô hình ER sang mô hình hướng đối tượng là:',
            options: [
                'a. Lớp đối tượng Bác sĩ, Lớp đối tượng Chuyên khoa, Lớp đối tượng Bệnh nhân',
                'b. Lớp đối tượng Bác sĩ, Lớp đối tượng Chuyên khoa, Lớp đối tượng Bệnh nhân, Lớp đối tượng Bảng theo dõi điều trị',
                'c. Lớp Bệnh nhân, Lớp Bác Sĩ, Lớp Liệu pháp điều trị',
                'd. Tất cả đều sai'
            ],
            correctAnswer: 1, // đáp án b
            image: 'images/hinh14.png'
        },
        {
            question: 'Câu 166: Cho lược đồ ER như trên, các lớp đối tượng sinh ra sau khi thực hiện chuyển đổi từ mô hình ER sang mô hình hướng đối tượng',
            options: [
                'a. Lớp đối tượng Bác sĩ, Lớp đối tượng Chuyên khoa, Lớp đối tượng Bệnh nhân',
                'b. Lớp đối tượng Bác sĩ, Lớp đối tượng Chuyên khoa, Lớp đối tượng Bệnh nhân, Lớp đối tượng Bảng theo dõi điều trị',
                'c. Lớp Bệnh nhân, Lớp Bác Sĩ, Lớp Liệu pháp điều trị',
                'd. Tất cả đều sai'
            ],
            correctAnswer: 1, // đáp án b
            image: 'images/hinh14.png'
        },
        {
            question: 'Câu 167: Cho lược đồ ER trên, lược đồ quan hệ kết quả sau khi thực hiện chuyển đổi từ ER sang là:',
            options: [
                'a. Bác Sĩ(Mã bs, Họ đêm, Tên, Số đt, Địa chỉ, mã ck), Bệnh nhân( Mã bn, Họ đêm, tên, địa chỉ, Bác sĩ theo dõi), Chuyên khoa(mã ck, Tên ck), Bảng điều trị (mã bn, mã bs, ngày đt, liệu pháp).',
                'b. Bác Sĩ(Mã bs, Họ đêm, Tên, Số đt, Địa chỉ), Bệnh nhân( Mã bn, Họ đêm, tên, địa chỉ,), Chuyênkhoa(mã ck, Tên ck), Bảng điều trị (mã bn, mã bs, ngày đt, liệu pháp).',
                'c. Bác Sĩ(Mã bs, Họ đêm, Tên, Số đt, Địa chỉ, mã ck), Bệnh nhân( Mã bn, Họ đêm, tên, địa chỉ), Chuyênkhoa(mã ck, Tên ck), Bảng điều trị (mã bn, mã bs, ngày đt, liệu pháp).',
                'd. Không có phương án đúng'
            ],
            correctAnswer: 0, // đáp án a
            image: 'images/hinh14.png'
        },
        {
            question: 'Câu 168: Cho lược đồ ER trên, Kết quả sau khi thực hiện chuyển đổi từ ER sang quan hệ là : Bác Sĩ(Mã bs, Họ đêm, Tên, Số đt, Địa chỉ, mã ck), Bệnh nhân( Mã bn, Họ đêm, tên, địa chỉ, Bác sĩ theo dõi), Chuyên khoa(mã ck, Tên ck), Bảng điều trị (mã bn, mã bs, ngày đt, liệu pháp). Quan hệ Bảng điều trị sẽ được phát sinh tại bước chuyển đổi thứ:',
            options: [
                'a. 5.',
                'b. 6.',
                'c. 7.',
                'd. 8.'
            ],
            correctAnswer: 0, // đáp án a
            image: 'images/hinh14.png'
        },
        {
            question: 'Câu 169: Cho lược đồ ER trên, thuộc tính mã ck đươc thêm vào quan hệ Bác Sĩ tại bước chuyển đổi thứ:',
            options: [
                'a. 4.',
                'b. 5.',
                'c. 6.',
                'd. 7.'
            ],
            correctAnswer: 0, // đáp án a
            image: 'images/hinh14.png'
        },
        {
            question: 'Câu 169: Cho lược đồ ER trên, thuộc tính Bác sĩ theo dõi được thêm vào vào quan hệ Bệnh nhân tại bước chuyển đổi thứ:',
            options: [
                'a. 4',
                'b. 5',
                'c. 6',
                'd. 8'
            ],
            correctAnswer: 0, // đáp án a
            image: 'images/hinh14.png'
        },
        {
            question: 'Câu 170: Ngôn ngữ DDL là:',
            options: [
                'a. Ngôn ngữ định nghĩa dữ liệu',
                'b. Ngôn ngữ truy vấn dữ liệu',
                'c. Ngôn ngữ định nghĩa cấu trúc',
                'd. Tất cả các phương án đều đúng'
            ],
            correctAnswer: 0, // đáp án a
          
        },
        {
            question: 'Câu 171: Một lớp mới có thể được định nghĩa bằng lệnh:',
            options: [
                'a. (make-class ClassName [:superclasses ListOfSuperClasses] [:attributes ListOfAttributes] [:methods ListOfMethodSpecs])',
                'b. Ngôn ngữ truy vấn dữ liệu',
                'c. Ngôn ngữ định nghĩa cấu trúc',
                'd. Tất cả các phương án đều sai'
            ],
            correctAnswer: 0, // đáp án a
          
        },
        {
            question: 'Câu 172: Ngôn ngữ DML là:',
            options: [
                'a. Ngôn ngữ thao tác dữ liệu',
                'b. Ngôn ngữ truy vấn dữ liệu',
                'c. Ngôn ngữ định nghĩa cấu trúc',
                'd. Ngôn ngữ định nghĩa dữ liệu'
            ],
            correctAnswer: 0, // đáp án a
           
        },
        {
            question: 'Câu 173: Ngôn ngữ DML là:',
            options: [
                'a. Ngôn ngữ cho phép khởi tạo, cập nhật, xóa các thể hiện riêng lẻ của lớp',
                'b. Ngôn ngữ cho phép mô tả lược đồ đối với cơ sở dữ liệu hướng đối tượng',
                'c. Cho phép đặc tả các giao dịch, điều khiển tính toàn vẹn ngữ nghĩa, sự cấp phép và quản lý truy cập các phương thức',
                'd. Ngôn ngữ định nghĩa cấu trúc'
            ],
            correctAnswer: 0, // đáp án a
     
        },
        {
            question: 'Câu 174: Ngôn ngữ DDL là:',
            options: [
                'a. Ngôn ngữ cho phép khởi tạo, cập nhật, xóa các thể hiện riêng lẻ của lớp',
                'b. Ngôn ngữ cho phép mô tả lược đồ đối với cơ sở dữ liệu hướng đối tượng',
                'c. Cho phép đặc tả các giao dịch, điều khiển tính toàn vẹn ngữ nghĩa, sự cấp phép và quản lý truy cập các phương thức',
                'd. Ngôn ngữ định nghĩa cấu trúc'
            ],
            correctAnswer: 1, // đáp án b
            
        },
        {
            question: 'Câu 175: Ngôn ngữ DDL là:',
            options: [
                'a. Ngôn ngữ cho phép khởi tạo, cập nhật, xóa các thể hiện riêng lẻ của lớp',
                'b. Ngôn ngữ cho phép mô tả lược đồ đối với cơ sở dữ liệu hướng đối tượng',
                'c. Cho phép đặc tả các giao dịch, điều khiển tính toàn vẹn ngữ nghĩa, sự cấp phép và quản lý truy cập các phương thức',
                'd. Ngôn ngữ định nghĩa cấu trúc'
            ],
            correctAnswer: 1, // đáp án b
           
        },
        {
            question: 'Câu 176: Ngôn ngữ DCL là:',
            options: [
                'a. Ngôn ngữ cho phép khởi tạo, cập nhật, xóa các thể hiện riêng lẻ của lớp',
                'b. Ngôn ngữ cho phép mô tả lược đồ đối với cơ sở dữ liệu hướng đối tượng',
                'c. Cho phép đặc tả các giao dịch, điều khiển tính toàn vẹn ngữ nghĩa, sự cấp phép và quản lý truy cập các phương thức',
                'd. Ngôn ngữ định nghĩa cấu trúc'
            ],
            correctAnswer: 2, // đáp án c
            image: 'images/hinh15.png'
        },
        {
            question: 'Câu 177: Ngôn ngữ DCL là:',
            options: [
                'a. Ngôn ngữ thao tác dữ liệu',
                'b. Ngôn ngữ truy vấn dữ liệu',
                'c. Ngôn ngữ điều khiển dữ liệu',
                'd. Ngôn ngữ định nghĩa dữ liệu'
            ],
            correctAnswer: 2, // đáp án c
        },
        {
            question: 'Câu 178: Reeloop là:',
            options: [
                'a. Ngôn ngữ truy vấn hướng đối tượng',
                'b. Hệ quản trị cơ sở dữ liệu hướng đối tượng',
                'c. Chuẩn của ngôn ngữ truy vấn hướng đối tượng',
                'd. Ngôn ngữ định nghĩa dữ liệu'
            ],
            correctAnswer: 0, // đáp án a
        },
        {
            question: 'Câu 179: Hệ thống O2 liên kết với thế giới CSDL bằng các chức năng:',
            options: [
                'a. Định danh đối tượng',
                'b. Kiểu trừu tượng',
                'c. Sự đóng gói',
                'd. Tính kế thừa và sự ràng buộc',
                'e. Tất cả các phương án đều đúng'
            ],
            correctAnswer: 4, // đáp án e
        },
        {
            question: 'Câu 180: OQL là ngôn ngữ:',
            options: [
                'a. Truy vấn đối tượng',
                'b. Định nghĩa đối tượng',
                'c. Cho phép sự đóng gói',
                'd. Thể hiện tính kế thừa và sự ràng buộc',
                'e. Tất cả các phương án đều đúng'
            ],
            correctAnswer: 4, // đáp án e
        },
        {
            question: 'Câu 181: Đầu vào của một truy vấn OQL là:',
            options: [
                'a. Một (hoặc nhiều hơn một) tập hợp các thể hiện của lớp được truy vấn hoặc các lớp trong đồ thị lược đồ của lớp được truy vấn',
                'b. Tập hợp các lớp trong lược đồ hướng đối tượng',
                'c. Tập hợp các đối tượng độc lập trong lược đồ hướng đối tượng',
                'd. Một tập hợp các thể hiện thuộc lớp cơ sở hay một tập hợp các thể hiện thuộc các lớp trong đồ thị truy vấn'
            ],
            correctAnswer: 0, // đáp án a
        },
        {
            question: 'Câu 182: Đầu ra của một truy vấn OQL là:',
            options: [
                'a. Một (hoặc nhiều hơn một) tập hợp các thể hiện của lớp được truy vấn hoặc các lớp trong đồ thị lược đồ của lớp được truy vấn',
                'b. Tập hợp các lớp trong lược đồ hướng đối tượng',
                'c. Tập hợp các đối tượng độc lập trong lược đồ hướng đối tượng',
                'd. Một tập hợp các thể hiện thuộc lớp cơ sở hay một tập hợp các thể hiện thuộc các lớp trong đồ thị truy vấn'
            ],
            correctAnswer: 3, // đáp án d
        },
        {
            question: 'Câu 183: Cho các lớp đối tượng trong lược đồ hướng đối tượng như sau: SELECT s.number FROM s IN Software. Kết quả của câu lệnh truy vấn này là:',
            options: [
                'a. Trả về một tập hợp các số nguyên là thể hiện của thuộc tính mã số của các đối tượng phần mềm s',
                'b. Trả về mã số của đối tượng s',
                'c. Trả về thuộc tính mã số của lớp phần mềm',
                'd. Trả về thuộc tính mã số của đối tượng s'
            ],
            correctAnswer: 0, // đáp án a
            image: 'images/hinh16.png'
        },
        {
            question: 'Câu 184: Cho các lớp đối tượng trong lược đồ hướng đối tượng như trên. SELECT p FROM p IN s.team, s IN Software WHERE s.number =111. Kết quả của câu lệnh truy vấn là:',
            options: [
                'a. Trả về một tập hợp các số nguyên là thể hiện của thuộc tính mã số của các đối tượng phần mềm s',
                'b. Trả về tập hợp các đối tượng p (người lập trình) tham gia trong phần mềm có mã số là 111',
                'c. Trả về tập hợp các đối tượng p có thuộc tính team của đối tượng s',
                'd. Trả về thuộc tính mã số của đối tượng s'
            ],
            correctAnswer: 1, // đáp án b
            image: 'images/hinh17.png'
        },
        
            {
              question: 'Câu 185: Để truy cập đến các thành phần dữ liệu của một đối tượng trong CSDL hướng đối tượng phải thông qua:',
              options: [
                'a. Biểu thức đường dẫn',
                'b. Tên lớp',
                'c. Tên đối tượng',
                'd. Thể hiện thuộc tính của đối tượng'
              ],
              correctAnswer: 0
            },
            {
              question: 'Câu 186: Nếu x là một đối tượng, a là một thuộc tính của đối tượng x, khi đó biểu thức đường dẫn để truy cập đến giá trị thuộc tính a của đối tượng x là:',
              options: [
                'a. x.a',
                'b. x::a',
                'c. x->a',
                'd. Tất cả các phương án đều sai'
              ],
              correctAnswer: 0
            },
            {
              question: 'Câu 187: Nếu x là một đối tượng, r là một thuộc tính mối quan hệ, khi đó biểu thức đường dẫn x.r là:',
              options: [
                'a. Thể hiện kết nối của mối quan hệ khi truy vấn',
                'b. Thể hiện truy xuất đến thuộc tính r của x',
                'c. Thể hiện sự truy xuất từ đối tượng thuộc lớp khác đến thuộc tính r',
                'd. Tất cả các phương án đều sai'
              ],
              correctAnswer: 0
            },
            {
              question: 'Câu 188: Cho truy vấn sau: SELECT p.name, p.role(p,s); FROM p IN Programmer, s IN p.works_on; WHERE s.number =111. Ý nghĩa của biểu thực p.name là:',
              options: [
                'a. Trả về tên của đối tượng p',
                'b. Trả về mã số của phần mềm',
                'c. Trả về giá trị của hàm name',
                'd. Trả về tập hợp các phần mềm s mà nhà lập trình p tham gia'
              ],
              correctAnswer: 0
            },
            {
              question: 'Câu 189: Cho truy vấn sau: SELECT p.name, p.role(p,s); FROM p IN Programmer, s IN p.works_on; WHERE s.number =111. Ý nghĩa của biểu thực s.number:',
              options: [
                'a. Trả về tên của đối tượng p',
                'b. Trả về mã số của phần mềm s',
                'c. Trả về giá trị của hàm name',
                'd. Trả về tập hợp các phần mềm s mà nhà lập trình p tham gia'
              ],
              correctAnswer: 1
            },
            {
              question: 'Câu 190: Cho truy vấn sau: SELECT p.name, p.role(p,s); FROM p IN Programmer, s IN p.works_on; WHERE s.number =111. Ý nghĩa của biểu thực p.role(p,s) là:',
              options: [
                'a. Trả về tên của đối tượng p',
                'b. Trả về mã số của phần mềm s',
                'c. Trả về giá trị của hàm role nói lên vai trò của nhà lập trình p trong phần mềm s',
                'd. Trả về tập hợp các phần mềm s mà nhà lập trình p tham gia'
              ],
              correctAnswer: 2
            },
            {
              question: 'Câu 191: Cho truy vấn sau: SELECT p.name, p.role(p,s); FROM p IN Programmer, s IN p.works_on; WHERE s.number =111. Ý nghĩa của biểu thực p.work_on là:',
              options: [
                'a. Trả về tên của đối tượng p',
                'b. Trả về mã số của phần mềm s',
                'c. Trả về giá trị của hàm role nói lên vai trò của nhà lập trình p trong phần mềm s',
                'd. Trả về tập hợp các phần mềm s mà nhà lập trình p tham gia'
              ],
              correctAnswer: 3
            },
            {
              question: 'Câu 192: OQL được chia thành:',
              options: [
                'a. 2 loại',
                'b. 3 loại',
                'c. 4 loại',
                'd. 5 loại'
              ],
              correctAnswer: 0
            },
            {
              question: 'Câu 193: OQL được chia thành:',
              options: [
                'a. Truy vấn trên một lớp đối tượng và truy vấn nối nhiều lớp trên một cấu trúc phân lớp',
                'b. Truy vấn trên một lớp đối tượng và truy vấn trên nhiều lớp độc lập',
                'c. Truy vấn trên các lớp đối tượng và truy vấn trên các thể hiện của lớp đối tượng',
                'd. Tất cả đều sai'
              ],
              correctAnswer: 0
            },
            {
              question: 'Câu 194: Cho cú pháp câu lệnh Select như sau: SELECT E(e) FROM e IN E WHERE C(e). Trong cú pháp lệnh trên thì e là:',
              options: [
                'a. Thể hiện của lớp',
                'b. Biểu thức đường dẫn',
                'c. Hàm của lớp',
                'd. Tập các lớp'
              ],
              correctAnswer: 0
            },
            {
              question: 'Câu 195: Cho cú pháp câu lệnh Select như sau: SELECT E(e) FROM e IN E WHERE C(e). Trong cú pháp lệnh trên thì E là:',
              options: [
                'a. Thể hiện của lớp',
                'b. Biểu thức đường dẫn. Hoặc hàm của lớp',
                'c. Tất cả đều sai',
                'd. Tập các lớp'
              ],
              correctAnswer: 1
            },
            {
              question: 'Câu 196: Cho cú pháp câu lệnh Select như sau: SELECT E(e) FROM e IN E WHERE C(e). Trong cú pháp trên thì mệnh đề From chỉ ra:',
              options: [
                'a. Thể hiện của lớp',
                'b. Biểu thức đường dẫn. Hoặc hàm của lớp',
                'c. Tập hợp các đối tượng truy vấn theo biểu thức đường dẫn E',
                'd. Tập các lớp'
              ],
              correctAnswer: 2
            },
            {
              question: 'Câu 197: Cho cú pháp câu lệnh Select như sau: SELECT E(e) FROM e IN E WHERE C(e). Trong cú pháp trên thì mệnh đề Where chỉ ra:',
              options: [
                'a. Thể hiện của lớp',
                'b. Biểu thức đường dẫn. Hoặc hàm của lớp',
                'c. Tập hợp các đối tượng truy vấn theo biểu thức đường dẫn E',
                'd. Điều kiện truy vấn'
              ],
              correctAnswer: 3
            },
            {
                question: 'Câu 198: (1 đáp án)\nCâu 197: Cho các lớp như trên:\nCâu truy vấn để hiển thị tên nhóm, số điện thoại và tên nhà quản lý của các nhóm lập trình của công ty là:',
                options: [
                'a. SELECT g.name, g.phone_no, g.manager.name FROM g In Group;',
                'b. SELECT g.name, g.phone_no, manager.name FROM g In Group;',
                'c. SELECT g.name, g.phone_no, g.manager.name FROM g In Programer',
                'd. Tất cả đều sai'
                ],
                correctAnswer: 0, // đáp án a
                image: 'images/hinh18.png'
            },
            {
                question: 'Câu 199: (1 đáp án)\nCâu 198: Cho các lớp như trên, hãy cho biết câu lệnh truy vấn sau: SELECT g.name, g.phone_no, g.manager.name FROM g In Group; Sai ở đâu:',
                options: [
                'a. g.manager.name',
                'b. g in Group',
                'c. g.phone_no',
                'd. Câu lệnh truy vấn đúng không sai'
                ],
                correctAnswer: 3, // đáp án d
                image: 'images/hinh19.png'
            },
            {
                question: 'Câu 200: (1 đáp án)\nCâu 199: Cho các lớp như trên, hãy cho biết câu lệnh truy vấn sau: SELECT p.name, p.group.name, p.phone_no FROM p IN Group WHERE p.floor= 2; Sai ở:',
                options: [
                'a. g.manager.name',
                'b. p IN Group',
                'c. g.phone_no',
                'd. Câu lệnh truy vấn đúng không sai'
                ],
                correctAnswer: 1, // đáp án b
                image: 'images/hinh20.png'
            },
            {
                question: "Câu 201: (1 đáp án)\nCâu 200: Cho các lớp như trên: Câu truy vấn để hiển thị tên , số điện thoại và tên nhóm của những nhà lập tình làm việc ở tầng 2 là:",
                options: [
                "a. SELECT p.name, p.group.name, p.phone_no FROM p IN Programmer WHERE p.floor= 2;",
                "b. SELECT p.name, group.name, p.phone_no FROM p IN Programmer WHERE p.floor= 2 ;",
                "c. SELECT p.name, programmer.group.name, p.phone_no FROM p IN Group WHERE p.floor= 2;",
                "d. Tất cả đều sai"
                ],
                correctAnswer: 0
                },
                {
                question: "Câu 202: (1 đáp án)\nCâu 201: Cho các lớp như trên, hãy cho biết câu lệnh truy vấn sau:\nSELECT p.name, group.name, p.phone_no FROM p IN Programmer WHERE p.floor= 2; Sai ở:",
                options: [
                "a. group.name",
                "b. p IN Group",
                "c. g.phone_no",
                "d. Câu lệnh truy vấn đúng không sai"
                ],
                correctAnswer: 0
                },
                {
                question: "Câu 203: (1 đáp án)\nCâu 202: Cho các lớp như trên: Câu truy vấn liệt kê tên, số điện thoại của các nhà lập tình có mã số lớn hơn 111 và thuộc nhóm phân tích:",
                options: [
                "a. SELECT p.name, p.phone_no FROM p IN Programmer; WHERE (p.group.name = ‘Analysis’) AND (p.number > 111);",
                "b. SELECT p.name, p.phone_no FROM p IN Programmer; WHERE (p.name = ‘Analysis’) AND (p.number > 111);",
                "c. SELECT p.name, p.phone_no FROM p IN Programmer; WHERE (p.name = ‘Analysis’) AND (p.group > 111);",
                "d. Tất cả đều sai"
                ],
                correctAnswer: 0
                },
                {
                question: "Câu 204: (1 đáp án)\nCâu 203: Cho các lớp như trên, cho câu lệnh truy vấn: SELECT p.name, p.phone_no FROM p IN Programmer; WHERE (p.group.name = ‘Analysis’) AND (p.number > 111); Câu lệnh sai ở:",
                options: [
                "a. Sai tại p.name;",
                "b. Sai ở p IN Programmer;",
                "c. Sai ở p.phone_no",
                "d. Tất cả đều sai"
                ],
                correctAnswer: 3
                },
                {
                question: "Câu 205: (1 đáp án)\nCâu 204: Trong truy vấn OQL cho phép truy vấn tối đa:",
                options: [
                "a. 1 lớp đối tượng",
                "b. 2 lớp đối tượng",
                "c. 3 lớp đối tượng",
                "d. nhiều lớp đố tượng tùy theo sự phân cấp lớp"
                ],
                correctAnswer: 3
                },
                {
                question: "Câu 206: (1 đáp án)\nCâu 205: Cho các lớp đối tượng như trên. Để hiển thị mã số, tên nhóm của các nhà lập trình tham gia trong dự án phần mềm số 101 và vai trò của họ trong dự án đó ta chọn câu lệnh:",
                options: [
                "a. SELECT p.number, p.name, p.group.name, p.role(p, s) FROM p IN Programmer, s IN Software WHERE (s.number = 101) AND (s IN p.works_on);",
                "b. SELECT p.number, p.name, p.group.name, p.role(p, s) FROM p IN Programmer, s IN Software WHERE (p.number = 101) AND (s IN p.works_on);",
                "c. SELECT p.number, p.name, p.group, p.role(p, s) FROM p IN Programmer, s IN Software WHERE (s.number = 101) AND (s IN p.works_on);",
                "d. SELECT p.number, p.name, p.group.name, role(p, s) FROM p IN Programmer, s IN Software WHERE (s.number = 101) AND (s IN p.works_on);"
                ],
                correctAnswer: 0
                },
                {
                question: "Câu 207: (1 đáp án)\nCâu 206: Cho các lớp đối tượng như trên.Và câu lệnh OQL như sau: SELECT p.number, p.name, p.group, p.role(p, s) FROM p IN Programmer, s IN Software WHERE (s.number = 101) AND (s IN p.works_on); câu lệnh sai ở:",
                options: [
                "a. Câu lệnh không sai",
                "b. Sai tại p.group",
                "c. Sai tại p In Programmer",
                "d. Sai tại s In Software"
                ],
                correctAnswer: 1
                },
                {
                question: "Câu 208: (1 đáp án)\nCâu 207: Cho các lớp đối tượng như trên.Và câu lệnh OQL như sau: SELECT p.number, p.name, p.group, p.role(p, s) FROM p IN Programmer, s IN Software WHERE (s.number = 101) AND (s IN p.works_on); Câu lệnh này sẽ hiển thị mã số, tên, tên nhóm các nhà lập trình tham gia trong dự án phần mềm số 101 và vai trò của họ trong dự án. Tuy nhiên câu lệnh này bị lỗi tại p.group cần sửa lại là :",
                options: [
                "a. Câu lệnh không sai",
                "b. p.group.name",
                "c. p In software",
                "d. s In Programmer"
                ],
                correctAnswer: 1
                },
                {
                question: "Câu 209: (1 đáp án)\nCâu 208: Cho các lớp đối tượng như trên.Và câu lệnh OQL như sau: SELECT p.name, p.phone_no, p.group.name FROM p IN Programmer, s IN Software WHERE (p.number = 111) AND NOT(s IN p.works_on); Câu lệnh này sẽ hiển thị tên, số điện thoại, tên nhóm, của các nhà lập trình không làm việc ở dự án phần mềm số 111. Tuy nhiên câu lệnh này bị lỗi tại:",
                options: [
                "a. Tất cả các phương án",
                "b. p.number=111",
                "c. s In p.work_on",
                "d. s In Software"
                ],
                correctAnswer: 1
                },
                {
                question: "Câu 210: (1 đáp án)\nCâu 209: Cho các lớp đối tượng như trên.Và câu lệnh OQL như sau: SELECT p.name, p.phone_no, p.group.name FROM p IN Programmer, s IN Software WHERE (p.number = 111) AND NOT(s IN p.works_on); Câu lệnh này sẽ hiển thị tên, số điện thoại, tên nhóm, của các nhà lập trình không làm việc ở dự án phần mềm số 111. Tuy nhiên câu lệnh này bị lỗi tại điều kiện Where cần sửa lại là:",
                options: [
                "a. Không có phương án đúng",
                "b. s.number=111",
                "c. s In s.work_on",
                "d. s In Group"
                ],
                correctAnswer: 1
                },
                {
                question: "Câu 211: (1 đáp án)\nCâu 210: Cho các lớp đối tượng như trên. Để hiển thị tên, số điện thoại, tên nhóm, của các nhà lập trình không làm việc ở dự án phần mềm số 111. Ta chọn phương án nào trong các phương án sau:",
                options: [
                "a. SELECT p.name, p.phone_no, p.group.name FROM p IN Programmer, s IN Software WHERE (s.number = 111) AND NOT(s IN p.works_on);",
                "b. SELECT p.name, p.phone_no, p.group.name FROM p IN Programmer, s IN Software WHERE (p.number = 111) AND NOT(s IN p.works_on);",
                "c. SELECT p.name, p.phone_no, s.group.name FROM p IN Programmer, s IN Software WHERE (p.number = 111) AND NOT(s IN p.works_on);",
                "d. SELECT p.name, p.phone_no, p.group.name FROM p IN Programmer, s IN Software WHERE (p.number = 111) AND NOT(s IN s.works_on);"
                ],
                correctAnswer: 0
                },
                {
                question: "Câu 212: (1 đáp án)\nCâu 211: Cho các lớp đối tượng như trên. Liệt kê mã số, tên, kinh phí của các dự án phần mềm sau năm 1997 do nhà lập trình có mã số 111 quản lý. Ta chọn phương án nào trong các phương án sau:",
                options: [
                "a. SELECT s.number, s.name, s.budget FROM s IN Software, p IN Programmer WHERE (p.number = 111) AND (p IN s.team) AND (role(p,s) = ‘Manage’) AND ( year(s.date) >1997);",
                "b. SELECT p.number, s.name, s.budget FROM s IN Software, p IN Programmer WHERE (p.number = 111) AND (p IN s.team) AND (role(p,s) = ‘Manage’) AND ( year(s.date) >1997);",
                "c. SELECT s.number, p.name, s.budget FROM s IN Software, p IN Programmer WHERE (p.number = 111) AND (p IN s.team) AND (role(p,s) = ‘Manage’) AND ( year(s.date) >1997);",
                "d. SELECT s.number, s.name, p.budget FROM s IN Software, p IN Programmer WHERE (p.number = 111) AND (p IN s.team) AND (role(p,s) = ‘Manage’) AND ( year(s.date) >1997);"
                ],
                correctAnswer: 0
                },
                {
                question: "Câu 213: (1 đáp án)\nCâu 212: Cho các lớp đối tượng như trên. Liệt kê mã số, tên, kinh phí của các dự án phần mềm sau năm 1997 do nhà lập trình có mã số 111 quản lý. Ta có câu lệnh OQL sau: SELECT s.number, s.name, s.budget FROM s IN Software, p IN Programmer WHERE (s.number = 111) AND (p IN s.team) AND (role(p,s) = ‘Manage’) AND (year(s.date) >1997); Tuy nhiên câu lệnh trên bị lỗi tại:",
                options: [
                "a. s.name",
                "b. s.number=111",
                "c. p IN s.team",
                "d. role(p,s)= ‘Manage’"
                ],
                correctAnswer: 1
                },
                {
                question: "Câu 214: (1 đáp án)\nCâu 213: Cho các lớp đối tượng như trên. Liệt kê mã số, tên, kinh phí của các dự án phần mềm sau năm 1997 do nhà lập trình có mã số 111 quản lý. Ta có câu lệnh OQL sau: SELECT s.number, s.name, s.budget FROM s IN Software, p IN Programmer WHERE (p.number = 111) AND (p IN s.team) AND (role(p) = ‘Manage’) AND (year(s.date) >1997); Tuy nhiên câu lệnh trên bị lỗi tại:",
                options: [
                "a. s.name",
                "b. p.number=111",
                "c. p IN s.team",
                "d. role(p)= ‘Manage’"
                ],
                correctAnswer: 3
                },
                {
                question: "Câu 215: (1 đáp án)\nCâu 214: Cho các lớp đối tượng như trên. Liệt kê mã số, tên, kinh phí của các dự án phần mềm sau năm 1997 do nhà lập trình có mã số 111 quản lý. Ta có câu lệnh OQL sau: SELECT s.number, s.name, s.budget FROM s IN Software, p IN Programmer WHERE (p.number = 111) AND (s IN s.team) AND (role(p,s) = ‘Manage’) AND (year(s.date) >1997); Tuy nhiên câu lệnh trên bị lỗi tại:",
                options: [
                "a. s.name",
                "b. p.number=111",
                "c. s IN s.team",
                "d. role(p,s)= ‘Manage’"
                ],
                correctAnswer: 2
                },
                {
                question: "Câu 216: (1 đáp án)\nCâu 215: Cho các lớp đối tượng như trên. Liệt kê mã số, tên, kinh phí của các dự án phần mềm sau năm 1997 do nhà lập trình có mã số 111 quản lý. Ta có câu lệnh OQL sau: SELECT s.number, s.name, s.budget FROM s IN Software, p IN Programmer WHERE (p.number = 111) AND (p IN s.team) AND (role(p,s) = ‘Manage’) AND (year(p.date) >1997); Tuy nhiên câu lệnh trên bị lỗi tại:",
                options: [
                "a. year(p.date)>1997",
                "b. p.number=111",
                "c. p IN s.team",
                "d. role(p,s)= ‘Manage’"
                ],
                correctAnswer: 0
                },
                {
                question: "Câu 217: (1 đáp án)\nCâu 216: Hãy cho biết đặc trưng của OQL:",
                options: [
                "a. OQL hỗi trợ kiểu phong phú hơn.",
                "b. OQL có thể tích hợp với các tính năng của ngôn ngữ lập trình hướng đối tượng như Smalltalk, C++, Java",
                "c. Truy vấn trên tất cả các thể hiện thuộc lớp chỉ ra trong đồ thị truy vấn",
                "d. Tất cả các phương án"
                ],
                correctAnswer: 3
                },
                {
                question: "Câu 218: (1 đáp án)\nCâu 217: Cho lớp Giao viên như sau: Class GIAOVIEN properties OID: ID; Hoten: String; Tuoi: Integer; Sothich: Set(String); Thuoc: KHOA; Giang: Set(MONHOC); Diachi: Tuple( Sonha: Integer; Duong: String; Thanhpho: String); operations ....... End GIAOVIEN. OID được gọi là thuộc tính:",
                options: [
                "a. Định danh.",
                "b. Khóa",
                "c. Thuộc tính đa trị",
                "d. Thuộc tính mỗi quan hệ"
                ],
                correctAnswer: 0
                },
                {
                question: "Câu 219: (1 đáp án)\nCâu 218: Cho lớp GIAOVIEN ... Sothich được gọi là thuộc tính:",
                options: [
                "a. Định danh.",
                "b. Khóa",
                "c. Thuộc tính đa trị",
                "d. Thuộc tính mỗi quan hệ"
                ],
                correctAnswer: 2
                },
                {
                question: "Câu 220: (1 đáp án)\nCâu 219: Cho lớp GIAOVIEN ... Thuoc được gọi là thuộc tính:",
                options: [
                "a. Định danh.",
                "b. Khóa",
                "c. Thuộc tính đa trị",
                "d. Thuộc tính mỗi quan hệ"
                ],
                correctAnswer: 3
                },
                {
                question: "Câu 221: (1 đáp án)\nCâu 220: Cho lớp GIAOVIEN ... Diachi được gọi là thuộc tính:",
                options: [
                "a. Định danh.",
                "b. Phức hợp",
                "c. Thuộc tính đa trị",
                "d. Thuộc tính mỗi quan hệ"
                ],
                correctAnswer: 1
                },
                {
                question: "Câu 222: (1 đáp án)\nCâu 221 Cho các lớp đối tượng như trên. Câu lệnh truy vấn sau: SELECT p.Name FROM p in SV_TOTNGHIEP WHERE p.DiemTB > = 7 Làm nhiệm vụ:",
                options: [
                "a. Liệt kê tên những sin h viên đã tốt nghiệp có điểm trung bình >=7",
                "b. Liệt kê tên những sinh viên đã tốt nghiệp",
                "c. Liệt kê tên những sinh viên có trong bảng SV_Tốt nghiệp và có điểm trung bình >=7",
                "d. Câu lệnh sai cú pháp"
                ],
                correctAnswer: 0
                },
                {
                question: "Câu 223: (1 đáp án)\nCâu 222: Cho các lớp đối tượng như trên. Câu lệnh truy vấn sau: SELECT Name FROM p in SV_TOTNGHIEP WHERE p.DiemTB > = 7 Câu lệnh trên sai ở:",
                options: [
                "a. Không có lỗi sai",
                "b. Sai ở Select Name",
                "c. Sai ở p in SV_TOTNGHIÊP",
                "d. Sai ở mệnh đề Where"
                ],
                correctAnswer: 1
                },
                {
                    question: "Câu 224: Cho các lớp đối tượng như trên. Để hiển thị ra tên những sinh viên đã tốt nghiệp với điểm trung bình >=8 ta chọn câu lệnh nào?",
                    options: [
                      "a. SELECT p.Name FROM p in SV_TOTNGHIEP WHERE p.DiemTB > = 7",
                      "b. SELECT s.Name FROM p in SV_TOTNGHIEP WHERE p.DiemTB > = 7",
                      "c. SELECT Name FROM p in SV_TOTNGHIEP WHERE DiemTB > = 7",
                      "d. SELECT Name FROM SV_TOTNGHIEP WHERE p.DiemTB > = 7"
                    ],
                    correctAnswer: 0
                  },
                  {
                    question: "Câu 225: Cho các lớp đối tượng như trên. Để hiển thị ra tên những sinh viên đã tốt nghiệp mà trưởng khoa quản lý sinh viên đó là Le An ta chọn câu lệnh:",
                    options: [
                      "a. SELECT p.Name FROM p in SV_TOTNGHIEP WHERE p.Khoa.Truongkhoa.Hoten = ‘Le An’",
                      "b. SELECT p.Name FROM p in SV_TOTNGHIEP WHERE p.Khoa.Hoten =‘Le An’",
                      "c. SELECT p.Name FROM p in SV_TOTNGHIEP WHERE p.Khoa.Truongkhoa =‘Le An’",
                      "d. SELECT p.Name FROM p in SV_TOTNGHIEP WHERE p. Truongkhoa.Hoten =‘Le An’"
                    ],
                    correctAnswer: 0
                  },
                  {
                    question: "Câu 226: Cho các lớp đối tượng như trên. Để liệt kê ra tên những giáo viên có sở thích là Xem TV ta chọn câu lệnh:",
                    options: [
                      "a. SELECT p.Name FROM p in GIAOVIEN WHERE ‘xem TV’ in p.Sothich",
                      "b. SELECT Name FROM p in GIAOVIEN WHERE ‘xem TV’ in p.Sothich",
                      "c. SELECT p.Name FROM GIAOVIEN WHERE ‘xem TV’ in p.Sothich",
                      "d. SELECT p.Name FROM p in GIAOVIEN WHERE Sothich= ‘xem TV’"
                    ],
                    correctAnswer: 0
                  },
                  {
                    question: "Câu 227: Cho các lớp đối tượng như trên. Cho câu lệnh truy vấn liệt kê tất cả tên giáo viên có sở thich là xem tivi như sau:\nSELECT p.Name FROM p in GIAOVIEN\nWHERE ‘xem TV’ in p.Sothich\nHãy cho biết câu lệnh trên sai ở đâu?",
                    options: [
                      "a. Sai ở mệnh đề Where",
                      "b. Sai ở mệnh đề From",
                      "c. Sai ở mệnh đề Select",
                      "d. Câu lệnh trên đúng"
                    ],
                    correctAnswer: 3
                  },
                  {
                    question: "Câu 228: Cho các lớp đối tượng như trên. Cho câu lệnh truy vấn liệt kê tên của những sinh viên đã tốt nghiệp mà tuổi của sinh viên đó lơn hơn tuổi của giáo viên hướng dẫn:\nSELECT p.Name FROM p in SV_TOTNGHIEP, WHERE p.Tuoi > f.Tuoi\nHãy cho biết câu lệnh trên sai ở:",
                    options: [
                      "a. Sai ở mệnh đề Where",
                      "b. Sai ở mệnh đề From",
                      "c. Sai ở mệnh đề Select",
                      "d. Câu lệnh trên đúng"
                    ],
                    correctAnswer: 1
                  },
                  {
                    question: "Câu 229: Cho các lớp đối tượng như trên. Cho câu lệnh truy vấn liệt kê tên của những sinh viên đã tốt nghiệp mà tuổi của sinh viên đó lơn hơn tuổi của giáo viên hướng dẫn\nSELECT p.Name FROM p in SV_TOTNGHIEP, WHERE p.Tuoi > f.Tuoi\nCâu lệnh truy vấn sai tại mệnh đề From cần sửa là:",
                    options: [
                      "a. FROM p in SV_TOTNGHIEP, f in p.GVhuongdan",
                      "b. FROM SV_TOTNGHIEP, GVhuongdan",
                      "c. FROM p in SV_TOTNGHIEP, f in GVhuongdan",
                      "d. FROM SV_TOTNGHIEP,"
                    ],
                    correctAnswer: 0
                  },
                  {
                    question: "Câu 230: Cho các lớp đối tượng như trên. Cho câu lệnh truy vấn SELECT p.Name FROM p in SV_TOTNGHIEP, f in p.GVhuongdan WHERE p.Tuoi > f.Tuoi\nKết quả của câu lệnh truy vấn trên là:",
                    options: [
                      "a. Liệt kê tên những sinh viên đã tốt nghiệp mà có tuổi lớn hơn tuổi của giáo viên hướng dẫn",
                      "b. Liệt kê những sinh viên đã tốt nghiệp mà có tuổi nhỏ hơn tuổi của giáo viên hướng dẫn",
                      "c. Liệt kê tên của những giáo viên mà có tuổi nhỏ hơn tuổi của sinh viên mình hướng dẫn"
                    ],
                    correctAnswer: 0
                  },
                  {
                    question: "Câu 231: (1 đáp án)\nCâu 230: Cho lược đồ ER như trên. Để chuyển đổi mối quan hệ phản xạ như trên ta sử dụng quy tắc chuyển đổi thứ:",
                    options: [
                    "a. 1",
                    "b. 2",
                    "c. 3",
                    "d. 4"
                    ],
                    correctAnswer: 3,
                    image: 'images/hinh21.png'
                    }
        

    ],
    // Các môn khác bắt đầu là mảng rỗng, bạn có thể bổ sung sau
    // pm1: [],
    // pm2: [],
    // mang: [],
    // hdh: [],
    // ktlt: [],
};


