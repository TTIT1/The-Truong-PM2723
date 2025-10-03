// Ngân hàng câu hỏi theo môn học
// Định nghĩa danh sách môn và câu hỏi tương ứng

// Danh sách môn hiển thị cho người dùng chọn
window.subjects = [
    { key: 'csdl_hdt', name: 'Cơ sở dữ liệu hướng đối tượng' },
    // Thêm các môn khác tại đây khi bạn sẵn sàng, ví dụ:
     { key: 'cnjava', name: 'Công nghệ java' },
     { key: 'dtdmvud', name: 'Điện toán đám mây và ứng dụng' },
    // { key: 'hdh', name: 'Hệ điều hành' },
    // { key: 'ktlt', name: 'Kỹ thuật lập trình' },
];

// Câu hỏi cho từng môn (mỗi phần tử là 1 câu hỏi)
// Mỗi câu hỏi có cấu trúc: { question, options: string[], correctAnswer: number, image?: string }
window.questionBank = {

    dtdmvud:[
  {
    question: 'Câu 1: Phát biểu nào sau đây là chính xác nhất về hình mẫu của điện toán đám mây?',
    options: [
      'Thông tin được lưu trữ tạm thời tại các máy chủ trên Internet và được lưu trữ thường trực ở các máy khách',
      'Thông tin được lưu trữ thường trực tại các máy chủ trên Internet và chỉ được lưu trữ tạm thời ở các máy khách',
      'Thông tin được lưu trữ thường trực tại các máy chủ trên Internet và chỉ được lưu trữ thường trực ở các máy khách',
      'Không có phát biểu nào đúng'
    ],
    correctAnswer: 1 // đáp án b
  },
  {
    question: 'Câu 2: Trong điện toán đám mây, thuật ngữ nào mô tả bản chất về cơ sở hạ tầng và việc mở rộng hạ tầng tùy thuộc vào nhu cầu tài nguyên?',
    options: ['Clustering', 'elasticity', 'consolidation', 'virtualization'],
    correctAnswer: 1 // đáp án b
  },
  {
    question: 'Câu 3: Mô hình dịch vụ Service category của loại PaaS gồm có những gì?',
    options: [
      'Application and software rental',
      'VM rental, online storage',
      'Online operating environment, online database, online message queues',
      'Không có đáp án đúng'
    ],
    correctAnswer: 2 // đáp án c
  },
  {
    question: 'Câu 4: Kiến trúc SOA viết tắt của từ gì?',
    options: ['single oriented architecture', 'service of architecture', 'service oriented architecture', 'Không có đáp án đúng'],
    correctAnswer: 2 // đáp án c
  },
  {
    question: 'Câu 5: Mô hình dịch vụ Service customization của loại IaaS gồm có những gì?',
    options: ['Logic resource template', 'Server template', 'Application template', 'Logic resource template and Application template'],
    correctAnswer: 1 // đáp án b
  },
  {
    question: 'Câu 6: Điện toán đám mây còn gọi là gì?',
    options: ['Điện toán lưới', 'Điện toán máy chủ thật', 'Điện toán máy chủ ảo', 'Không có đáp án đúng'],
    correctAnswer: 2 // đáp án c
  },
  {
    question: 'Câu 7: Dịch vụ PaaS là viết tắt của từ gì?',
    options: ['Platform as a Service', 'Platform as a Server', 'Plat as a Service', 'Platform and a Service'],
    correctAnswer: 0 // đáp án a
  },
  {
    question: 'Câu 8: Kiểu dịch vụ Service monitoring của loại PaaS gồm có những gì?',
    options: ['logic resource monitoring', 'physical resource monitoring', 'application monitoring', 'application monitoring, logic resource monitoring'],
    correctAnswer: 0 // đáp án a
  },
  {
    question: 'Câu 9: Kiểu dịch vụ Service monitoring của loại IaaS gồm có những gì?',
    options: ['application monitoring', 'logic resource monitoring', 'physical resource monitoring', 'application monitoring, logic resource monitoring'],
    correctAnswer: 2 // đáp án c
  },
  {
    question: 'Câu 10: Đâu là nhược điểm của điện toán đám mây, chọn đáp án đúng nhất?',
    options: [
      'Tính riêng tư, tính sẵn dùng, mất dữ liệu, khả năng bảo mật, quyền sở hữu',
      'Tính riêng tư, tính di động dữ liệu, mất dữ liệu, khả năng bảo mật, quyền sở hữu',
      'Tính riêng tư, tính sẵn dùng, tính di động dữ liệu, mất dữ liệu, khả năng bảo mật, quyền sở hữu',
      'Tính riêng tư, tính sẵn dùng, tính di động dữ liệu, mất dữ liệu, khả năng bảo mật'
    ],
    correctAnswer: 2 // đáp án c
  },
  {
    question: 'Câu 11: Có bao nhiêu lớp thành phần trong điện toán đám mây?',
    options: ['2', '4', '3', '5'],
    correctAnswer: 3 // đáp án d
  },
  {
    question: 'Câu 12: Loại dịch nào mà người sử dụng sau khi thuê xong còn phải xây dựng thêm các thành phần nhiều nhất?',
    options: ['Paas', 'Iaas', 'Saas', 'Không có đáp án đúng'],
    correctAnswer: 1 // đáp án b
  },
  {
    question: 'Câu 13: Trong hoạt động của điện toán đám mây lớp Back – End để làm gì?',
    options: ['Không có đáp án đúng', 'Là lớp chứa giao diện người dùng của ứng dụng', 'Là lớp chứa toàn bộ các thành phần hoạt động', 'Là lớp chứa hạ tầng thiết bị'],
    correctAnswer: 3 // đáp án d
  },
  {
    question: 'Câu 14: Mô hình dịch vụ Service accessing and using của loại SaaS gồm có những gì?',
    options: ['remote console, web services', 'web 2.0 access technology', 'online development and debugging, integration of offline development tools and cloud', 'web services and web 2.0 access technology'],
    correctAnswer: 1 // đáp án b
  },
  {
    question: 'Câu 15: Những loại dịch vụ nào khi thuê có Database?',
    options: ['PaaS', 'IaaS, PaaS', 'SaaS', 'PaaS, SaaS'],
    correctAnswer: 3 // đáp án d
  },
  {
    question: 'Câu 16: Mô hình dịch vụ Service accessing and using của loại IaaS gồm có những gì?',
    options: ['online development and debugging, integration of offline development tools and cloud', 'remote console, web services', 'web 2.0 access technology', 'web services and web 2.0 access technology'],
    correctAnswer: 1 // đáp án b
  },
  {
    question: 'Câu 17: Trong hoạt động của điện toán đám mây lớp Front – End để làm gì?',
    options: ['Không có đáp án đúng', 'Là lớp chứa hạ tầng thiết bị', 'Là lớp chứa toàn bộ các thành phần hoạt động', 'Là lớp chứa giao diện người dùng của ứng dụng'],
    correctAnswer: 3 // đáp án d
  },
  {
    question: 'Câu 18: Kiến trúc SOA là kiến trúc gì?',
    options: ['Kiến trúc hướng theo định hướng duy nhất', 'Kiến trúc hướng dịch vụ', 'Kiến trúc đa tác vụ', 'Không có đáp án đúng'],
    correctAnswer: 1 // đáp án b
  },
  {
    question: 'Câu 19: Mô hình dịch vụ Service category của loại SaaS gồm có những gì?',
    options: ['VM rental, online storage', 'Application and software rental', 'Online operating environment, online database, online message queues', 'Không có đáp án đúng'],
    correctAnswer: 1 // đáp án b
  },
  {
    question: 'Câu 20: Điện toán đám mây có thể được xem như là giai đoạn tự nhiên tiếp theo từ mô hình điện toán nào?',
    options: ['Mô hình điện toán theo nhu cầu', 'Mô hình điện toán lưới', 'Mô hình điện toán tự trị', 'Không có đáp án đúng'],
    correctAnswer: 1 // đáp án b
  },
  {
    question: 'Câu 21: Những loại dịch vụ nào khi thuê có Operating System?',
    options: ['SaaS', 'IaaS, PaaS', 'PaaS, SaaS', 'PaaS'],
    correctAnswer: 2 // đáp án c
  },
  {
    question: 'Câu 22: Loại dịch vụ nào mà người sử dụng có được môi trường để lập trình chương trình ứng dụng?',
    options: ['Iaas', 'Paas', 'Saas', 'Không có đáp án đúng'],
    correctAnswer: 1 // đáp án b
  },
  {
    question: 'Câu 23: Những loại dịch vụ nào khi thuê có Networking?',
    options: ['Saas', 'Iaas, Paas, Saas, Standalone Server', 'Paas', 'Iaas, Paas, Saas'],
    correctAnswer: 3 // đáp án d
  },
  {
    question: 'Câu 24: Google Computer Engine là dịch vụ thuộc loại gì?',
    options: ['SaaS', 'PaaS', 'IaaS', 'Không có đáp án đúng'],
    correctAnswer: 2 // đáp án c
  },
  {
    question: 'Câu 25: Mô hình dịch vụ Service category của loại IaaS gồm có những gì?',
    options: ['Application and software rental', 'Online operating environment, online database, online message queues', 'VM rental, online storage', 'Không có đáp án đúng'],
    correctAnswer: 2 // đáp án c
  },
  {
    question: 'Câu 26: Tổng thể các thành phần của môi trường điện toán đám mây?',
    options: ['application, platform, infrastructure', 'client, application, Session, network, Data', 'application, presentation, transport, network, Data', 'client, application, platform, infrastructure, server'],
    correctAnswer: 3 // đáp án d
  },
  {
    question: 'Câu 27: Những loại dịch vụ nào khi thuê có Storage?',
    options: ['Iaas, Paas', 'Iaas, Paas, Saas, Standalone Server', 'Paas, Saas', 'Iaas, Paas, Saas'],
    correctAnswer: 3 // đáp án d
  },
  {
    question: 'Câu 28: Google App Engine là dịch vụ thuộc loại gì?',
    options: ['Không có đáp án đúng', 'SaaS', 'IaaS', 'PaaS'],
    correctAnswer: 3 // đáp án d
  },
  {
    question: 'Câu 29: Mô hình dịch vụ Service customization của loại PaaS gồm có những gì?',
    options: ['Server template', 'Logic resource template', 'Application template', 'Logic resource template and Application template'],
    correctAnswer: 1 // đáp án b
  },
  {
    question: 'Câu 30: Gmail là ứng dụng thuộc loại dịch vụ gì?',
    options: ['IaaS', 'PaaS', 'SaaS', 'Không có đáp án đúng'],
    correctAnswer: 2 // đáp án c
  },
  {
    question: 'Câu 31: Với mô hình dịch vụ SaaS, người sử dụng phải tự xây dựng cái gì?',
    options: ['thực thi, ứng dụng, dữ liệu', 'ứng dụng, dữ liệu', 'dữ liệu', 'nền tảng, thực thi, ứng dụng, dữ liệu'],
    correctAnswer: 2 // đáp án c
  },
  {
    question: 'Câu 32: Trong điện toán đám mây, thuật ngữ ảo hóa - Virtualization có ý nghĩa là?',
    options: ['Nó tự động tải thêm các nền tảng hạ tầng', 'Nó loại bỏ các hệ điều hành không hiệu quả', 'Nó cải thiệu hiệu quả sử dụng các ứng dụng web', 'Nó tối ưu hóa việc sử dụng tài nguyên máy tính'],
    correctAnswer: 3 // đáp án d
  },
  {
    question: 'Câu 33: Facebook thuộc loại dịch vụ điện toán đám mây nào?',
    options: ['Không có đáp án đúng', 'Paas', 'Iaas', 'Saas'],
    correctAnswer: 3 // đáp án d
  },
  {
    question: 'Câu 34: Thuật ngữ nào mô tả việc thanh toán dựa trên sự đóng gói các tài nguyên máy tính và tổng dung lượng sử dụng tài nguyên đó?',
    options: ['Recurring', 'Metered', 'subscription', 'per user based'],
    correctAnswer: 1 // đáp án b
  },
  {
    question: 'Câu 35: Dịch vụ IT truyền thống phải tự xây dựng bao nhiêu phần?',
    options: ['thực thi, ứng dụng, dữ liệu', 'nền tảng, thực thi, ứng dụng, dữ liệu', 'ứng dụng, dữ liệu', 'nền tảng, thực thi'],
    correctAnswer: 1 // đáp án b
  },
  {
    question: 'Câu 36: Mô hình dịch vụ Service customization của loại SaaS gồm có những gì?',
    options: ['Logic resource template and Application template', 'Logic resource template', 'Server template', 'Application template'],
    correctAnswer: 3 // đáp án d
  },
  {
    question: 'Câu 37: Những loại dịch vụ nào khi thuê có Runtimes?',
    options: ['PaaS', 'IaaS, PaaS', 'SaaS', 'PaaS, SaaS'],
    correctAnswer: 3 // đáp án d
  },
  {
    question: 'Câu 38: Điện toán đám mây viết là gì?',
    options: ['Cloud Internet', 'Cloud Mobile', 'Cloud Computing', 'Không có phương án đúng'],
    correctAnswer: 2 // đáp án c
  },
  {
    question: 'Câu 39: Dịch vụ IaaS là viết tắt của từ gì?',
    options: ['Infra as a Service', 'Infrasture as a Server', 'Infrasture as a Service', 'Không có đáp án đúng'],
    correctAnswer: 2 // đáp án c
  },
  {
    question: 'Câu 40: Có bao nhiêu mô hình điện toán đám mây được triển khai trong thực tế?',
    options: ['4', '3', '2', '5'],
    correctAnswer: 0 // đáp án a
  },
  {
    question: 'Câu 41: SaaS được xem như đã bao gồm tích hợp với lớp nào của các dịch vụ điện toán đám mây?',
    options: ['Application', 'Client', 'Data', 'Infrastructure'],
    correctAnswer: 0 // đáp án a
  },
  {
    question: 'Câu 42: Những loại dịch vụ nào khi thuê có Virtualization?',
    options: ['Paas, Saas', 'Iaas, Paas, Saas, Standalone Server', 'Iaas, Paas', 'Iaas, Paas, Saas'],
    correctAnswer: 3 // đáp án d
  },
  {
    question: 'Câu 43: Thuật ngữ Cloud Computing ra đời vào năm nào?',
    options: ['2009', '2008', '2007', '2010'],
    correctAnswer: 2 // đáp án c
  },
  {
    question: 'Câu 44: Những loại dịch vụ nào khi thuê có Application?',
    options: ['PaaS', 'SaaS', 'PaaS, SaaS', 'IaaS, PaaS, SaaS'],
    correctAnswer: 1 // đáp án b
  },
  {
    question: 'Câu 45: Với mô hình dịch vụ IaaS, người sử dụng phải tự xây dựng cái gì?',
    options: ['ứng dụng, dữ liệu', 'nền tảng, thực thi, ứng dụng, dữ liệu', 'thực thi, ứng dụng, dữ liệu', 'dữ liệu'],
    correctAnswer: 2 // đáp án c
  },
  {
    question: 'Câu 46: Những loại dịch vụ nào khi thuê có Server?',
    options: ['Iaas, Paas, Saas, Standalone Server', 'Iaas, Paas, Saas', 'Iaas, Paas', 'Paas, Saas'],
    correctAnswer: 1 // đáp án b
  },
  {
    question: 'Câu 47: Với mô hình dịch vụ PaaS, người sử dụng phải tự xây dựng cái gì?',
    options: ['thực thi, ứng dụng, dữ liệu', 'dữ liệu', 'ứng dụng, dữ liệu', 'nền tảng, thực thi, ứng dụng, dữ liệu'],
    correctAnswer: 2 // đáp án c
  },
  {
    question: 'Câu 48: Dịch vụ SaaS là viết tắt của từ gì?',
    options: ['Software as a Server', 'Software as a Service', 'Soft as a Service', 'Software and a Service'],
    correctAnswer: 1 // đáp án b
  },
  {
    question: 'Câu 49: Mô hình dịch vụ Service accessing and using của loại PaaS gồm có những gì?',
    options: ['remote console, web services', 'online development and debugging, integration of offline development tools and cloud', 'web 2.0 access technology', 'web services and web 2.0 access technology'],
    correctAnswer: 1 // đáp án b
  },
  {
    question: 'Câu 50: Loại dịch vụ nào mà người sử dụng chỉ cần thuê và đưa dữ liệu vào ứng dụng luôn?',
    options: ['Iaas', 'Paas', 'Saas', 'Không có đáp án đúng'],
    correctAnswer: 2 // đáp án c
  },
  {
    question: 'Câu 51: Google Search là dịch vụ thuộc loại gì?',
    options: ['IaaS', 'SaaS', 'PaaS', 'Không có đáp án đúng'],
    correctAnswer: 1 // đáp án b
  },
  {
    question: 'Câu 52: Có mấy mô hình triển khai của điện toán đám mây trong thực tế?',
    options: ['4', '3', '5', '2'],
    correctAnswer: 0 // đáp án a
  },
  {
    question: 'Câu 53: Mô hình Private cloud sau khi xây dựng sẽ cung cấp các loại dịch vụ nào?',
    options: ['IaaS, SaaS.', 'IaaS, PaaS, SaaS.', 'IaaS', 'PaaS.'],
    correctAnswer: 1 // đáp án b
  },
  {
    question: 'Câu 54: Phần nào không cần khai báo khi cấu hình máy chủ ảo?',
    options: ['Cloud SQL', 'Tag', 'Zone', 'Name'],
    correctAnswer: 0 // đáp án Cloud SQL
  },
  {
    question: 'Câu 55: Điện toán máy chủ ảo hoạt động gồm có mấy lớp?',
    options: ['5 lớp', '4 lớp', '2 lớp', '3 lớp'],
    correctAnswer: 2 // đáp án c
  },
  {
    question: 'Câu 56: Dịch vụ nào là nền tảng đám mây cho việc triển khai xây dựng ứng dụng công nghệ thông tin trực tuyến?',
    options: ['PaaS', 'SaaS', 'IaaS', 'XaaS'],
    correctAnswer: 0 // đáp án a
  },
  {
    question: 'Câu 57: Tổ chức hỗ trợ cộng đồng phù hợp với việc triển khai mô hình đám mây nào?',
    options: ['Private cloud.', 'Public cloud.', 'Community cloud.', 'Hybrid cloud.'],
    correctAnswer: 2 // đáp án c
  },
  {
    question: 'Câu 58: Đâu là dịch vụ của Microsoft được phát triển theo mô hình SaaS?',
    options: ['Windows Azure', 'Office 365', 'OnDrive', 'Windows Azure Platform'],
    correctAnswer: 1 // đáp án b
  },
  {
    question: 'Câu 59: Dạng dịch vụ nào sau đây không thuộc phạm vi cung cấp của PaaS?',
    options: ['Các bộ lưu trữ dữ liệu.', 'Các bộ nhớ mở rộng.', 'Các phần mềm ứng dụng.', 'Các hệ điều hành máy tính.'],
    correctAnswer: 2 // đáp án c
  },
  {
    question: 'Câu 60: Để được xem một dịch vụ điện toán đám mây như là PaaS thì nó cần có',
    options: ['Tự động mở rộng qui mô.', 'Thời gian chạy trừu tượng (abstracted runtime)', 'Lớp bộ nhớ đệm (caching layer)', 'Là tổng hợp tất cả các đáp án khác.'],
    correctAnswer: 2 // đáp án c
  },
  {
    question: 'Câu 61: IaaS là từ?',
    options: ['Infrasture as a Server', 'Infrasture as all Service', 'Không có đáp án đúng', 'Infra as a Service'],
    correctAnswer: 2 // đáp án c
  },
  {
    question: 'Câu 62: Thuật ngữ Multi-tenancy trong điện toán đám mây được hiểu như thế nào?',
    options: ['Là dịch vụ chia sẻ một ứng dụng cho nhiều người dùng.', 'Là dịch vụ bảo mật ứng dụng trên điện toán đám mây', 'Là dịch vụ sử dụng được truy cập qua Internet.', 'Là dịch vụ đáp ứng nhanh theo nhu cầu người dùng.'],
    correctAnswer: 3 // đáp án d
  },
  {
    question: 'Câu 63: Đặc trưng nào không thể hiện trên PaaS?',
    options: ['Độc lập.', 'Máy tính mở.', 'Nền tảng web.', 'Đáp ứng nhu cầu.'],
    correctAnswer: 0 // đáp án a
  },
  {
    question: 'Câu 64: Software as a Service được xem giống như là một dịch vụ hosted.',
    options: ['Đúng.', 'Sai.', 'Không chọn đáp án này.'],
    correctAnswer: 1 // đáp án b
  },
  {
    question: 'Câu 65: Hãng IBM mở trung tâm điện toán đám mây tại thị trường Việt Nam vào năm nào?',
    options: ['2010', '2009', '2008', '2011'],
    correctAnswer: 2 // đáp án c
  },
  {
    question: 'Câu 66: Public Cloud được hiểu đơn giản là gì?',
    options: ['Một dịch vụ điện toán đám mây cho một cộng đồng nào đó.', 'Một kiến trúc đám mây riêng duy trì trong trung tâm dữ liệu doanh nghiệp.', 'Một dịch vụ điện toán đám mây tiêu chuẩn cung cấp qua mạng Internet.', 'Không chọn đáp án này.'],
    correctAnswer: 2 // đáp án c
  },
  {
    question: 'Câu 67: Kiểu dịch vụ Service measurement của loại IaaS gồm có những gì?',
    options: ['network, storage, and server virtualization', 'logic resource usage metering', 'application usage metering', 'physical resource metering'],
    correctAnswer: 3 // đáp án d
  },
  {
    question: 'Câu 68: Dịch vụ Google App Engine cung cấp dịch vụ thuộc dạng',
    options: ['Platform as a Service.', 'Hardware as a Service.', 'Infrastucture as a Service.', 'Software as a Service.'],
    correctAnswer: 0 // đáp án a
  },
  {
    question: 'Câu 69: Kiểu dịch vụ security của loại SaaS gồm có những gì?',
    options: ['data isolation, operating environment isolation, SSI, Web authentication and authorization', 'data isolation, operating environment isolation, SSL', 'storage encryption and isolation, VM isolation, VLAN, SSL/SSH', 'storage encryption and isolation, VM isolation'],
    correctAnswer: 0 // đáp án a
  },
  {
    question: 'Câu 70: Phải tự xây dựng bao nhiêu phần trong mô hình dịch vụ IT truyền thống?',
    options: ['2', '3', '4', '1'],
    correctAnswer: 2 // đáp án c
  },
  {
    question: 'Câu 71: Dịch vụ điện toán đám mây nào không phải do Google cung cấp?',
    options: ['Dropbox', 'Chrome', 'OneDrive', 'Youtube'],
    correctAnswer: 2 // đáp án c
  },
  {
    question: 'Câu 72: Điều nào sau đây không phải là lợi thế của điện toán đám mây?',
    options: [
      'Duy trì một mạng lưới điện toán đám mây là dễ dàng.',
      'Không bận tâm đến không gian lưu trữ dữ liệu.',
      'Truy cập trực tuyến vào các tài nguyên mạng.',
      'Chỉ trả tiền cho những gì mình sử dụng.'
    ],
    correctAnswer: 1 // đáp án b
  },
  {
    question: 'Câu 73: Google là công ty máy tính cung cấp dịch vụ triển khai mô hình điện toán đám mây nào?',
    options: ['Private cloud.', 'Public cloud.', 'Hybrid cloud.', 'Public cloud và Private cloud.'],
    correctAnswer: 1 // đáp án b
  },
  {
    question: 'Câu 74: VPS là gì?',
    options: ['Virtual pet site.', 'Video programming System.', 'Vietnamese professinals Society.', 'Virtual private server.'],
    correctAnswer: 3 // đáp án d
  },
  {
    question: 'Câu 75: Dịch vụ đám mây Google Computer Engine và Cloud SDK để thao tác với loại dịch vụ nào?',
    options: ['Software-as-a-Service.', 'Infrastructure-as-a-Service.', 'Không có đáp án đúng.', 'Platform-as-a-Service.'],
    correctAnswer: 1 // đáp án b
  },
  {
    question: 'Câu 76: Kiểu dịch vụ Service optimization của loại IaaS gồm có những gì?',
    options: ['network, storage, and server virtualization', 'large-scale distributed file system, database, middleware', 'multi-tenancy', 'multi-tenancy, network, storage'],
    correctAnswer: 0 // đáp án a
  },
  {
    question: 'Câu 77: Khi một công ty muốn phân phối sản phẩm theo mô hình SaaS thì cần tổ chức nó thế nào?',
    options: ['Thanh toán theo thuê bao', 'Kiến trúc chia sẻ cho nhiều người dùng (multi-tenant)', 'Là tất cả các lý do khá', 'Truy cập qua Internet.'],
    correctAnswer: 2 // đáp án c
  },
  {
    question: 'Câu 78: Kiểu dịch vụ Service optimization của loại PaaS gồm có những gì?',
    options: ['multi-tenancy', 'network, storage, and server virtualization', 'large-scale distributed file system, database, middleware', 'multi-tenancy, network, storage'],
    correctAnswer: 2 // đáp án c
  },
  {
    question: 'Câu 79: Một công ty cung cấp các dịch vụ điện toán đám mây là một môi trường, sao cho khách hàng xây dựng ứng dụng trên đó. Vậy, các dịch vụ của công ty thuộc loại mô hình nào?',
    options: ['Platform as a Service', 'Softwareas a Service', 'Infrastructure as a Service', 'Computing as a Service'],
    correctAnswer: 2 // đáp án c
  },
  {
    question: 'Câu 80: Kiến trúc service oriented architecture là kiến trúc gì?',
    options: ['Kiến trúc hơớng theo định hơớng duy nhất', 'Kiến trúc hơớng đối tơợng', 'Không có đáp án đúng', 'Kiến trúc đa tác vụ'],
    correctAnswer: 2 // đáp án c
  },
  {
    question: 'Câu 81: Hybrid cloud là gì?',
    options: ['Là hệ thống mạng internet trong điện toán đám mây', 'Là hệ thống mạng nội bộ của một tổ chức x hội có kết nối mạng toàn cầu.', 'Là một mô hình triển khai điện toán đám mây.', 'Là hệ thống mạng cộng đồng.'],
    correctAnswer: 2 // đáp án c
  },
  {
    question: 'Câu 83: Một công ty cần cung cấp dịch vụ sử dụng các thiết bị đa dạng công nghệ thông tin cho khách hàng trên toàn thế giới. Thuộc tính nào của điện toán đám mây có thể giúp công ty thực hiện công việc này?',
    options: ['Phổ biến rộng rãi', 'Giá cả linh hoạt', 'Theo cấu trúc phát triển của phần mềm ứng dụng', 'Theo cấu trúc mở rộng máy chủ'],
    correctAnswer: 2 // đáp án c
  },
  {
    question: 'Câu 84: Mô tả nào là đúng về dịch vụ Paltform as a Service của điện toán đám mây',
    options: [
      'Cung cấp một môi trường để các ứng dụng có thể chạy được và bao gồm một tập các dịch vụ cơ bản như bộ nhớ ngoài và cơ sở dữ liệu',
      'Cung cấp các nền tảng để người dùng có thể tạo được máy tính ảo và lưu trữ ảo',
      'Cung cấp các dịch vụ hạ tầng để người dùng có thể chạy các ứng dụng trên đó',
      'Cung cấp các dịch vụ hạ tầng để cho các ứng dụng web có thể chạy được'
    ],
    correctAnswer: 2 // đáp án c
  },
  {
    question: 'Câu 85: Năm 2008, Hãng IBM có khách hàng đầu tiên tại Việt Nam là Công ty nào?',
    options: ['Viettel IDC', 'VNPT', 'FPT', 'VNTT'],
    correctAnswer: 3 // đáp án d
  },
  {
    question: 'Câu 86: Dịch vụ Google drive có phải là một dạng của điện toán đám mây',
    options: ['Sai', 'Đúng', 'Không chọn đáp án này.'],
    correctAnswer: 1 // đáp án b
  },
  {
    question: 'Câu 87: Các dịch vụ theo mô hình Saas đóng góp phần nào trong đám mây lai – Hybird Cloud',
    options: ['Cung cấp giải pháp hệ thống', 'Phần mềm ứng dụng trên đám mây', 'Nền tảng hệ thống', 'Tối ưu hoá quản lý phần cứng'],
    correctAnswer: 1 // đáp án b
  },
  {
    question: 'Câu 88: Kiểu dịch vụ security của loại PaaS gồm có những gì?',
    options: [
      'load balance',
      'storage encryption and isolation, VM isolation, VLAN, SSL/SSH',
      'data isolation, operating environment isolation, SSI, Web authentication and authorization',
      'data isolation, operating environment isolation, SSL'
    ],
    correctAnswer: 3 // đáp án d
  },
  {
    question: 'Câu 89: Các bước tạo máy chủ ảo Google Engine thứ tự như thế nào?',
    options: [
      'VM instances/ Computer engine/new instances / config VM',
      'Config VM/ Computer engine/VM instances/new instances',
      'Computer engine/VM instances/new instances / config VM',
      'Computer engine/VM instances/ config VM /new instances'
    ],
    correctAnswer: 2 // đáp án c
  },
  {
    question: 'Câu 90: Khó khăn khi triển khai sử dụng SaaS ở các doanh nghiệp?',
    options: ['Hệ thống cũ đang hoạt động', 'An ninh thông tin', 'Tất cả', 'Thói quen người ding'],
    correctAnswer: 2 // đáp án c
  },
  {
    question: 'Câu 91: Private Cloud là mô hình dịch vụ điện toán đám mây được xây dựng để phục vụ cho?',
    options: ['Riêng cho một cộng đồng nào đó.', 'Nội bộ một tổ chức xã hội.', 'Công cộng.', 'Nền tảng điện toán đám mây.'],
    correctAnswer: 1 // đáp án b
  },
  {
    question: 'Câu 92: Thuật ngữ Rapid Service trong điện toán đám mây được hiểu như thế nào?',
    options: [
      'Là dịch vụ đáp ứng nhanh theo nhu cầu người dùng.',
      'Là dịch vụ chia sẻ ứng dụng cho nhiều người dùng.',
      'Là dịch vụ sử dụng được truy cập qua Internet.',
      'Là dịch vụ bảo mật ứng dụng trên điện toán đám mây'
    ],
    correctAnswer: 3 // đáp án d
  },
  {
    question: 'Câu 93: Đám mây công cộng cung cấp những dịch vụ nào.',
    options: [
      'Infrastructure-as-a-Service.',
      'Infrastructure-as-a-Service và Software-as-a-Service',
      'Infrastructure-as-a-Service, Platform-as-a-Service và Software-as-a-Service',
      'Platform-as-a-Service và Software-as-a-Service'
    ],
    correctAnswer: 2 // đáp án c
  },
  {
    question: 'Câu 94: Dịch vụ lưu trữ đám mây OneDrive là sản phẩm của công ty nào?',
    options: ['Microsoft', 'Amazon', 'Không có đáp án đúng', 'Google'],
    correctAnswer: 0 // đáp án a
  },
  {
    question: 'Câu 95: Nền tảng nào không phải là nền tảng của điện toán đám mây?',
    options: ['Không có đáp án đúng', 'Amazone Webservice', 'Facebook', 'Windows Azure'],
    correctAnswer: 0 // đáp án a
  },
  {
    question: 'Câu 96: Tính năng nào không được google hỗ trợ cho một máy chủ ảo?',
    options: ['Metadata', 'Image', 'e-mail', 'Quotas'],
    correctAnswer: 2 // đáp án c
  },
  {
    question: 'Câu 97: Hình thức được sử dụng nhiều nhất trong điện toán đám mây là?',
    options: ['Nền tảng như một dịch vụ (PaaS)', 'Cơ sở hạ tầng như một dịch vụ (IaaS)', 'SaaS', 'Dữ liệu như một dịch vụ (DAAS)'],
    correctAnswer: 2 // đáp án c
  },
  {
    question: 'Câu 98: Thứ tự đúng của mô hình điện toán máy chủ ảo?',
    options: [
      'Client – Application– Infrastructure –Server – Platform.',
      'Client – Platform – Application– Infrastructure –Server.',
      'Client – Infrastructure – Platform –Application –Server.',
      'Client – Application– Platform – Infrastructure –Server.'
    ],
    correctAnswer: 3 // đáp án d
  },
  {
    question: 'Câu 99: Kiểu dịch vụ Service measurement của loại SaaS gồm có những gì?',
    options: ['logic resource usage metering', 'physical resource metering', 'application usage metering', 'network, storage, and server virtualization'],
    correctAnswer: 2 // đáp án c
  },
  {
    question: 'Câu 100: Công nghệ điện toán đám mây được dùng để thay thế cho',
    options: [
      'Các máy tính có cấu hình cao, đắt tiền.',
      'Trung tâm dữ liệu tập trung',
      'Tất cả các đám án khác đều đúng.',
      'Các hệ thống phần mềm nâng cấp thường xuyên'
    ],
    correctAnswer: 2 // đáp án c
  },
  {
    question: 'Câu 101: Muốn triển khai xây dựng mô hình điện toán đám mây riêng Private cloud thì lựa chọn mô hình của nhà cung cấp nào',
    options: ['IBM.', 'Microsoft.', 'VMware.', 'IBM, VMware, Microsoft.'],
    correctAnswer: 3
  },
  {
    question: 'Câu 102: App Engine PHP SDK của hãng nào?',
    options: ['Google.', 'Amazon.', 'Oracle.', 'IBM.'],
    correctAnswer: 0
  },
  {
    question: 'Câu 103: Google App Engine có bao nhiêu thành phần chính?',
    options: ['5', '7', '6', '8'],
    correctAnswer: 2
  },
  {
    question: 'Câu 104: Mô hình đám mây nào thích hợp với doanh nghiệp?',
    options: ['Đám mây cộng đồng.', 'Đám mây công cộng.', 'Đám mây riêng.', 'Đám mây lai.'],
    correctAnswer: 2
  },
  {
    question: 'Câu 105: Kiểu dịch vụ Service measurement của loại PaaS gồm có những gì?',
    options: ['physical resource metering', 'logic resource usage metering', 'application usage metering', 'network, storage, and server virtualization'],
    correctAnswer: 1
  },
  {
    question: 'Câu 106: Dịch vụ nào sau đây không phải là một dạng của điện toán đám mây.',
    options: ['Platform as a Service.', 'Hardware as a Service.', 'Infrastructure as a Service.', 'Software as Service.'],
    correctAnswer: 1
  },
  {
    question: 'Câu 107: Người sử dụng phải tự xây dựng mấy phần nếu thuê dịch vụ IaaS?',
    options: ['1', '4', '2', '3'],
    correctAnswer: 3
  },
  {
    question: 'Câu 108: Một tổ chức quyết định sử dụng SaaS khi cần?',
    options: ['Tất cả các lý do khác', 'Kinh doanh phần mềm', 'Giá cả', 'Bảo trì.'],
    correctAnswer: 0
  },
  {
    question: 'Câu 109: Khi nào thì lựa chọn dịch vụ đám mây công cộng (public cloud)?',
    options: [
      'Người dùng có các ứng dụng Infrastructure-as-a-Service từ một nhà cung cấp có chiến lược an ninh thực hiện tốt.',
      'Người dùng có các ứng dụng Software-as-a-Service từ một nhà cung cấp có chiến lược an ninh thực hiện tốt.',
      'Cả 3 phương án khác.',
      'Người dùng có các ứng dụng Platform-as-a-Service từ một nhà cung cấp có chiến lược an ninh thực hiện tốt.'
    ],
    correctAnswer: 1
  },
  {
    question: 'Câu 110: Google App Engine được sử dụng để thao tác triển khai loại dịch vụ nào trong điện toán đám mây.',
    options: ['Infrastructure-as-a-Service.', 'Tất cả đáp án .', 'Software-as-a-Service.', 'Platform-as-a-Service.'],
    correctAnswer: 3
  },
  {
    question: 'Câu 111: Kiểu dịch vụ Service monitoring của loại SaaS gồm có những gì?',
    options: ['logic resource monitoring', 'application monitoring', 'physical resource monitoring', 'application monitoring, logic resource monitoring'],
    correctAnswer: 1
  },
  {
    question: 'Câu 112: Public clouds là gì?',
    options: [
      'Là đám mây được chia sẻ bởi một số tổ chức và hỗ trợ một cộng đồng cụ thể có mối quan tâm chung.',
      'Là đám mây được quản lý bởi các công ty lớn chuyên cung cấp các dịch vụ cho cộng đồng.',
      'Là đám mây được cung cấp bên trong của một tổ chức xã hội.',
      'Là đám mây công cộng cố gắng cung cấp cho người tiêu dùng các phần tử công nghệ thông tin tốt nhất.'
    ],
    correctAnswer: 3
  },
  {
    question: 'Câu 113: Dịch vụ nào Google cung cấp miễn phí.',
    options: ['Cloud SQL', 'Goole drive', 'Compute Engine', 'PreviewCloud Datastore'],
    correctAnswer: 1
  },
  {
    question: 'Câu 114: Software as a Service sử dụng cùng một ứng dụng cho nhiều người dùng (multi-tenant)',
    options: ['Không chọn đáp án này.', 'Đúng', 'Sai.'],
    correctAnswer: 1
  },
  {
    question: 'Câu 115: Kiểu dịch vụ security của loại IaaS gồm có những gì?',
    options: ['load balance', 'data isolation, operating environment isolation, SSL', 'data isolation, operating environment isolation, SSI, Web authentication and authorization', 'storage encryption and isolation, VM isolation, VLAN, SSL/SSH'],
    correctAnswer: 3
  },
  {
    question: 'Câu 116: Mô hình dịch vụ trong kiến trúc của điện toán đám mây là gì?',
    options: ['Software-as-a-Service', 'Platform-as-a-Service', 'd.Cả 3 mô hình dịch vụ', 'Infrastructure-as-a-Service'],
    correctAnswer: 2
  },
  {
    question: 'Câu 117: Multi-tenancy là một dạng kiến trúc trong SaaS, nó cho phép',
    options: ['Một ứng dụng phần mềm chia sẻ cho nhiều người dùng.', 'Các doanh nghiệp cùng thuê một tòa nhà.', 'Một ứng dụng phần mềm phục vụ nhiều khách hàng.', 'Không chọn đáp án này.'],
    correctAnswer: 2
  },
  {
    question: 'Câu 118: Phát biểu nào sai về đám mây cộng cộng?',
    options: [
      'Là mô hình các dịch vụ đám mây được bên thứ ba cung cấp.',
      'Các đám mây tồn tại ngoài tường lửa của công ty và tổ chức sử dụng.',
      'Đám mây tồn tại bên trong tường lửa của các tổ chức và được tổ chức quản lý trực tiếp.',
      'Các đám mây được lưu trữ đầy đủ và được nhà cung cấp đám mây quản lý.'
    ],
    correctAnswer: 2
  },
  {
    question: 'Câu 119: Public cloud cung cấp các loại dịch vụ nào',
    options: ['IaaS, SaaS.', 'PaaS, SaaS,', 'IaaS, PaaS,', 'IaaS, PaaS, SaaS'],
    correctAnswer: 3
  },
  {
    question: 'Câu 120: Dịch vụ nào của đám mây Google không phát triển theo mô hình Saas',
    options: ['Google mail', 'Goolge drive', 'Google maps', 'Google App Engine'],
    correctAnswer: 3
  },
  {
    question: 'Câu 121: Phát biểu dưới đây đâu là phát biểu sai?',
    options: [
      'Hiện Google App Engine hỗ trợ các ngôn ngữ là:Python, Java, Delphi.',
      'Khi sử dụng Google app engine các nhà đầu tư e ngại vì toàn bộ dữ liệu đều nằm trong tay nhà cung cấp dịch vụ.',
      'Sử dụng google app engine thì phải phụ thuộc hoàn toàn vào dịch vụ của google.',
      'App Engine hỗ trợ HTTPS đối với domain con của .appspot.com những vẫn chưa hỗ trợ đối với các domain khác.'
    ],
    correctAnswer: 0
  },
  {
    question: 'Câu 122: Các dịch vụ điện toán đám mây theo mô hình triển khai thực tế Public cloud cho phép',
    options: ['Không cho truy cập.', 'Bảo mật truy cập và không phổ biến.', 'Trả tiền cho truy cập.', 'Miễn phí truy cập và phổ biến'],
    correctAnswer: 3
  },
  {
    question: 'Câu 123: Nền tảng như một dịch vụ PaaS được phát triển dựa trên nền tảng nào?',
    options: ['Infrastucture as a Service.', 'Software as a Service.', 'Communications as a Service (CaaS)', 'Desktop as a Service (DaaS).'],
    correctAnswer: 0
  },
  {
    question: 'Câu 124: Kiểu dịch vụ Service level management của loại IaaS gồm có những gì?',
    options: ['dynamic orchestration of logic resources', 'dynamic orchestration of physical resources', 'dynamic orchestration of applications', 'multi-tenancy, network, storage'],
    correctAnswer: 1
  },
  {
    question: 'Câu 125: Khi làm quen Google App Engine, Google cung cấp lập trình viên bao nhiêu tài nguyên miễn phí.',
    options: ['500MB', '1GB', '250MB', '100MB'],
    correctAnswer: 0
  },
  {
    question: 'Câu 126: Community Cloud là mô hình dịch vụ điện toán đám mây được xây dựng để phục vụ cho?',
    options: ['Nội bộ một tổ chức xã hội.', 'Riêng cho một cộng đồng nào đó.', 'Công cộng.', 'Nền tảng điện toán đám mây.'],
    correctAnswer: 1
  },
  {
    question: 'Câu 127: Kiểu dịch vụ Service integration and combination của loại PaaS gồm có những gì?',
    options: ['SOA, mashup', 'load balance', 'SOA', 'usage metering'],
    correctAnswer: 2
  },
  {
    question: 'Câu 128: Kiểu dịch vụ Service level management của loại SaaS gồm có những gì?',
    options: ['dynamic orchestration of logic resources', 'dynamic orchestration of physical resources', 'dynamic orchestration of applications', 'multi-tenancy, network, storage'],
    correctAnswer: 2
  },
  {
    question: 'Câu 129: Doanh nghiệp triển khai đám mây riêng gặp những khó khăn gì?',
    options: [
      'Cả 3 đáp án khác.',
      'Chi phí hoạt động liên tục của đám mây có thể vượt chi phí sử dụng một đám mây chung.',
      'Trách nhiệp thiết lập và bảo trì đám mây.',
      'Chi phí của việc thiết lập đám mây bên trong có thể có chiều hướng găn cản việc sử dụng.'
    ],
    correctAnswer: 0
  },
  {
    question: 'Câu 130: Các phần mềm dịch vụ (SaaS) được cài đặt ở đâu khi sử dụng',
    options: ['Không cần cài đặt, nó được phân phối thông qua mạng', 'Trên thiết bị di động', 'Thiết bị nào sử dụng đều phải cài đặt phần mềm', 'Trên máy tính'],
    correctAnswer: 0
  },
  {
    question: 'Câu 131: Khi sử dụng các dịch vụ của Public cloud khách hàng phải trả tiền cho những dịch vụ nào?',
    options: [
      'Nhà cung cấp dịch vụ điện toán đám mây.',
      'Nhà cung cấp dịch vụ mạng.',
      'Miễn phí.',
      'Nhà cung cấp dịch vụ mạng và nhà cung cấp dịch vụ điện toán đám mây.'
    ],
    correctAnswer: 1
  },
  {
    question: 'Câu 132: Kiểu dịch vụ Service level management của loại PaaS gồm có những gì?',
    options: ['application usage metering', 'dynamic orchestration of applications', 'dynamic orchestration of physical resources', 'dynamic orchestration of logic resources'],
    correctAnswer: 3
  },
  {
    question: 'Câu 133: Ứng dụng nào sau đây không sử dụng dịch vụ của đám mây?',
    options: ['Google doc', 'Open office', 'Google Drive', 'Facebook'],
    correctAnswer: 1
  },
  {
    question: 'Câu 134: Hãng Viettel IDC là nhà cung cấp các dịch vụ điện toán đám mây được thành lập vào năm nào?',
    options: ['2008', '2009', '2010', '2011'],
    correctAnswer: 0
  },
  {
    question: 'Câu 135: Cách gọi khác về điện toán đám mây?',
    options: ['Điện toán tự trị', 'Không có đáp án đúng', 'Điện toán máy chủ thật', 'Điện toán lơới'],
    correctAnswer: 1
  },
  {
    question: 'Câu 136: SOA là kiểu kiến trúc, viết tắt của từ gì?',
    options: ['single oriented architecture', 'service oriented a line', 'service of architecture', 'Không có đáp án đúng'],
    correctAnswer: 3
  },
  {
    question: 'Câu 137: Công ty bạn đang làm việc kinh doanh bằng cách cho thuê các máy chủ host làm dịch vụ cho web và email, đây là mô hình kinh doanh dựa trên loại dịch vụ nào',
    options: ['IaaS.', 'SaaS', 'PaaS.', 'PaaS và IaaS.'],
    correctAnswer: 0
  },
  {
    question: 'Câu 138: Phần mềm như một dịch vụ SaaS được phát triển dựa trên nền tảng nào?',
    options: ['Infrastucture as a Service.', 'Platform as a Service.', 'Communications as a Service (CaaS)', 'Desktop as a Service (DaaS).'],
    correctAnswer: 1
  },
  {
    question: 'Câu 139: Đâu là lợi thế khi sử dụng các phần mềm dịch vụ (SaaS)',
    options: [
      'Chi phí đầu tư rẻ, cần ít người quản lý',
      'Không mất chi phí đầu tư phần cứng, chỉ phải mua phần mềm cài đặt',
      'Không mất phí đầu tư hạ tầng và nhân sự quản lý',
      'Được dùng miễn phí'
    ],
    correctAnswer: 2
  },
  {
    question: 'Câu 140: Một doanh nghiệp cung cấp dịch vụ SaaS thì các sản phẩm của nó thuộc loại mô hình nào?',
    options: ['Application a Service', 'Platform as a Service', 'Computing as a Service', 'Infrastructure as a Service'],
    correctAnswer: 1
  },
  {
    question: 'Câu 141: Kiểu dịch vụ Service integration and combination của loại SaaS gồm có những gì?',
    options: ['SOA, mashup', 'load balance', 'SOA', 'usage metering'],
    correctAnswer: 0
  },
  {
    question: 'Câu 142: Phát biểu nào đúng về đám mây riêng?',
    options: [
      'Là mô hình các dịch vụ đám mây được bên thứ ba cung cấp.',
      'Các đám mây tồn tại ngoài tường lửa của công ty và tổ chức sử dụng.',
      'Các đám mây được lưu trữ đầy đủ và được nhà cung cấp đám mây quản lý.',
      'Đám mây tồn tại bên trong tường lửa của các tổ chức và được tổ chức quản lý trực tiếp.'
    ],
    correctAnswer: 3
  },
  {
    question: 'Câu 143: Chức năng Preview Cloud Datastore (cơ sở dữ liệu ảo) của điện toán máy chủ ảo do hãng nào cung cấp?',
    options: ['Amazon', 'Microsoft', 'IBM', 'Google'],
    correctAnswer: 3
  },
  {
    question: 'Câu 144: Mô hình triển khai nào của điện toán đám mây sẽ cho phép các nhà quản lý IT toàn quyền điều khiển các nguồn lực sẵn có',
    options: ['Commnunity Cloud.', 'Public Cloud', 'Hybrid Cloud', 'Private Cloud'],
    correctAnswer: 3
  },
  {
    question: 'Câu 145: Dịch vụ EC2 của Amazon ra mắt lần đầu vào năm nào?',
    options: ['2009', '2008', '2007', '2006'],
    correctAnswer: 3
  },
  {
    question: 'Câu 146: EC2 là nền tảng cơ sở hạ tầng điện toán đám mây do hãng nào cung cấp?',
    options: ['Microsoft.', 'IBM.', 'Amazon.', 'Google.'],
    correctAnswer: 2
  },
  {
    question: 'Câu 147: Thuật ngữ Secure Service trong điện toán đám mây được hiểu như thế nào?',
    options: [
      'Là dịch vụ bảo mật ứng dụng trên điện toán đám mây',
      'Là dịch vụ chia sẻ ứng dụng cho nhiều người dùng.',
      'Là dịch vụ đáp ứng nhanh theo nhu cầu người dùng.',
      'Là dịch vụ sử dụng được truy cập qua Internet.'
    ],
    correctAnswer: 2
  },
  {
    question: 'Câu 148: Các dịch vụ điện toán đám mây theo mô hình triển khai thực tế Private cloud cho phép',
    options: ['Trả tiền cho truy cập.', 'Miễn phí truy cập và phổ biến.', 'Bảo mật truy cập và không phổ biến.', 'Không cho truy cập.'],
    correctAnswer: 2
  },
  {
    question: 'Câu 149: Người sử dụng phải tự xây dựng mấy phần nếu thuê dịch vụ SaaS?',
    options: ['2', '1', '3', '4'],
    correctAnswer: 1
  },
  {
    question: 'Câu 150: Một trong số các hạn chế của SaaS là gì?',
    options: ['Hệ điều hành máy tính', 'Cấu hình xử lý của mấy tính', 'Hệ thống máy chủ', 'Kết nối mạng Internet'],
    correctAnswer: 3
  },
  {
    question: 'Câu 151: Dịch vụ Email web-based thực hiện dựa trên nền tảng dịch vụ nào của điện toán đám mây?',
    options: ['Software as a Service', 'Platform as a Service', 'Infrastructure as a Service', 'Computing as a Service'],
    correctAnswer: 2
  },
  {
    question: 'Câu 152: Người sử dụng phải tự xây dựng mấy phần nếu thuê dịch vụ PaaS?',
    options: ['4', '3', '1', '2'],
    correctAnswer: 3
  },
  {
    question: 'Câu 153: Phần mềm dịch vụ (SaaS) có thể được ứng dụng cho những thiết bị nào?',
    options: ['Điện thoại', 'Máy tính', 'Ô tô', 'Tất cả các thiết bị có kết nối mạng, internet'],
    correctAnswer: 3
  },
  {
    question: 'Câu 154: Kiểu dịch vụ Service integration and combination của loại IaaS gồm có những gì?',
    options: ['usage metering', 'SOA', 'SOA, mashup', 'load balance'],
    correctAnswer: 3
  },
  {
    question: 'Câu 155: Mô hình đám mây riêng có lợi thế gì so với đám mây chung?',
    options: [
      'Đám mây được lưu trữ đầy đủ và được quản lý chặt chẽ.',
      'Phân bố tải workload cho các ứng dụng được sử dụng bởi nhiều người.',
      'Có thể phục vụ tốt các quy trình nhiệp vụ tới hạn, an toàn, như các khoản thanh toán của khách , xử lý bảng lương của nhân viên…',
      'Kiểm soát chi tiết hơn trên các tài nguyên khách nhau đang tạo thành một đám mây mang lại cho tất cả các tùy chọn cấu hình có sẵn.'
    ],
    correctAnswer: 3
  },
  {
    question: 'Câu 156: Phần mềm Office365 của Microsoft tương thích với hệ điều hành nào?',
    options: ['Windows 8', 'Tất cả', 'Linux', 'Mac'],
    correctAnswer: 1
  },
  {
    question: 'Câu 157: Kiểu dịch vụ Service optimization của loại SaaS gồm có những gì?',
    options: ['application usage metering', 'large-scale distributed file system, database, middleware', 'network, storage, and server virtualization', 'multi-tenancy'],
    correctAnswer: 3
  },
  {
    question: 'Câu 158: Private Cloud được hiểu đơn giản là gì?',
    options: [
      'Một dịch vụ điện toán đám mây tiêu chuẩn cung cấp qua mạng Internet.',
      'Một kiến trúc đám mây riêng duy trì trong trung tâm dữ liệu doanh nghiệp.',
      'Một dịch vụ điện toán đám mây cho một cộng đồng nào đó.',
      'Không chọn đáp án này.'
    ],
    correctAnswer: 1
  },
  {
    question: 'Câu 159: Khi xây dựng và khai thác một mô hình điện toán đám mây mà tổ chức cần kiểm soát chi tiết các tài nguyên, thì mô hình nào sẽ được lựa chọn.',
    options: ['Private cloud.', 'Public cloud.', 'Hybrid cloud.', 'Comunity cloud.'],
    correctAnswer: 0
  },
  {
    question: 'Câu 160: Trong công nghệ điện toán đám mây hiện đại thì vấn đề số một là gì',
    options: ['Bảo mật', 'Đắt đỏ', 'Quá nhiều nền tảng', 'Khả năng truy cập'],
    correctAnswer: 0
  },
  {
    question: 'Câu 161: Dịch vụ Google docs có phải là một dạng của điện toán đám mây',
    options: ['Không chọn đáp án này.', 'Sai', 'Đúng'],
    correctAnswer: 2
  },
  {
    question: 'Câu 162: Một môi trường máy tính cho phép người dùng có thể truy cập vào các máy tính ảo thì thuộc mô hình nào của điện toán đám mây',
    options: ['Platform as a Service', 'Softwareas a Service', 'Computing as a Service', 'Infrastructure as a Service'],
    correctAnswer: 0
  },
  {
    question: 'Câu 163: Điện toán máy chủ ảo gồm mấy thành phần?',
    options: ['5', '3', '4', '2'],
    correctAnswer: 0
  },
  {
    question: 'Câu 164: Software as a Service có thể được hiểu như thế nào?',
    options: ['Dịch vụ cho thuê phần mềm qua mạng.', 'Dịch vụ cho phép Download các phần mềm.', 'Dịch vụ giao hàng các phần mềm.', 'Mô hình phân phối các phần mềm.'],
    correctAnswer: 3
  },
  {
    question: 'Câu 165: Hội thảo “hành trình tới công nghệ điện toán đám mây” do Microsoft tổ chức ngày 2/3/2011 ở đâu?',
    options: ['Hà Nội', 'Thành phố Hồ Chí Minh', 'Đà Nẵng', 'Huế'],
    correctAnswer: 0
  },
  {
    question: 'Câu 166: Bộ phần mềm Visual Studio Online của Microsoft ứng dụng công nghệ nào?',
    options: ['Máy chủ ảo hoá', 'Điện toán đám mây', 'Web 2.0', 'Client – Server'],
    correctAnswer: 1
  },
  {
    question: 'Câu 167: Hiểu thế nào cho đúng về một nhà cung cấp dịch vụ ứng dụng chạy trên mạng',
    options: [
      'Nó thuộc loại SaaS',
      'Nó thuộc loại dịch vụ truy cập qua Internet',
      'Nó thuộc dạng dịch vụ máy tính hạ tầng',
      'Nó thuộc loại dịch vụ đo lường cho khách hàng'
    ],
    correctAnswer: 3
  },
  {
    question: 'Câu 168: Có bao nhiêu mô hình triển khai của dịch vụ điện toán đám mây',
    options: ['1', '3', '2', '4'],
    correctAnswer: 3
  },
  {
    question: 'Câu 169: Giả sử công ty của bạn cần xây dựng hệ thống Email cho toàn bộ nhân viên và quản lý thông tin Email như một điễn đàn. Khi đó, cần lựa chọn dạng dịch vụ nào để triển khai',
    options: ['Hybrid cloud', 'Public cloud', 'Private cloud', 'Community cloud.'],
    correctAnswer: 2
  },
  {
    question: 'Câu 170: Dịch vụ nào không phải là dịch vụ lưu trữ đám mây',
    options: ['Dropbox', 'Office 365', 'Google Drive', 'SkyDrive'],
    correctAnswer: 1
  },
  {
    question: 'Câu 171: Phần mềm nào không thể triển khai trên đám mây theo mô hình SaaS',
    options: ['Phần mềm quản lý nhân sự', 'Phần mềm quản lý khách hàng', 'Phần mềm kế toán', 'Tất cả'],
    correctAnswer: 3
  },
  {
    question: 'Câu 172: Các đám mây lai (Hybird Cloud) phù hợp cho những đối tượng nào?',
    options: ['Tổ chức nhà nước', 'Doanh nghiệp', 'Doanh nghiệp, cá nhân', 'Cá nhân'],
    correctAnswer: 1
  },
  {
    question: 'Câu 173: Doanh nghiệp công nghệ Việt Nam nào duy nhất tham gia sự kiện tại Nhật, ngày 26/2/2014, do tập đoàn Nikkei tổ chức',
    options: ['VNPT', 'Viettel IDC', 'FPT', 'VNTT'],
    correctAnswer: 2
  },
  {
    question: 'Câu 174: Google App Engine cung cấp mấy môi trường thực thi tốt cho các ứng dụng?',
    options: ['4', '3', '1', '2'],
    correctAnswer: 3
  },
  {
    question: 'Câu 175: sử dụng Google App Engine và App Engine PHP SDK để chạy website hỗ trợ ngôn ngữ và cơ sở dữ liệu nào?',
    options: ['PHP và SQL.', 'ASP và Accese.', 'PHP và My SQL.', 'Java và oracle .'],
    correctAnswer: 2
  },
  {
    question: 'Câu 176: Phần mềm dịch vụ SaaS là gì?',
    options: [
      'Là phần mềm được đóng gói bán cho người dùng cài đặt tại máy tính',
      'Phần mềm được đóng gói để người dùng cài đặt tại máy chủ',
      'Phần mềm được cài đặt và chạy trên website',
      'Là phần mềm ứng dụng công nghệ điện toán đám mây'
    ],
    correctAnswer: 3
  },
  {
    question: 'Câu 177: Các dịch vụ như gmail, google doc, facebook thuộc loại dịch vụ nào của điện toán đám mây?',
    options: ['Infrastructure-as-a-Service.', 'Platform-as-a-Service.', 'Software-as-a-Service.', 'Không có đáp án đúng..'],
    correctAnswer: 2
  },
  {
    question: 'Câu 178: Yếu tố nào không phải là lợi thế của SaaS so với các đám mây riêng?',
    options: ['Tốc độ triển khai', 'Hỗ trợ người ding', 'Bảo mật', 'Chi phí triển khai và nâng cấp'],
    correctAnswer: 2
  },
  {
    question: 'Câu 179: Tính năng nào sau đây không có trong ứng dựng điện toán đám mây Private cloud',
    options: ['Thanh toán tiền theo đồng hồ đo.', 'Cổng thông tin tự phục vụ.', 'Kết nối trực tiếp đến nhà hỗ trợ.', 'Tính đàn hồi nhanh (rapid elasticity).'],
    correctAnswer: 0
  },
  {
    question: 'Câu 180: Điện toán đám mây có thể đơợc xem nhơ là giai đoạn tự nhiên tiếp theo từ mô hình điện toán nào?',
    options: ['Mô hình điện toán máy chủ thật', 'Mô hình điện toán tự trị', 'Mô hình điện toán theo nhu cầu', 'Không có đáp án đúng'],
    correctAnswer: 3
  },
  {
    question: 'Câu 181: Amazone cung cấp miễn phí tài khoản Amazone EC2 trong thời gian bao lâu?',
    options: ['3 tháng', '6 tháng', '9 tháng', '12 tháng'],
    correctAnswer: 3
  },
  {
    question: 'Câu 182: Đâu là tình năng không thuộc phạm vi phục vụ của SaaS?',
    options: ['Email', 'Searchin integer', 'Clusted', 'Running'],
    correctAnswer: 3
  },
  {
    question: 'Câu 183: Điện toán đám mây có thể được xem như là giai đoạn tự nhiên tiếp theo từ mô hình điện toán nào?',
    options: ['Mô hình điện toán lưới', 'Mô hình điện toán theo nhu cầu', 'Mô hình điện toán tự trị', 'Không có đáp án đúng'],
    correctAnswer: 0
  },
  {
    question: 'Câu 184: Kiểu dịch vụ Service monitoring của loại SaaS gồm có những gì?',
    options: ['application monitoring', 'logic resource monitoring', 'physical resource monitoring', 'application monitoring, logic resource monitoring'],
    correctAnswer: 0
  },
  {
    question: 'Câu 185: Các đám mây lai hầu hết thường được sử dụng làm:',
    options: [
      'Một đối tác, nơi các ứng dụng lưu trú trong đám mây và các ứng dụng quan trọng vẫn còn trên trang web.',
      'Không có đáp án đúng',
      'Khả năng bổ sung hay khả năng bùng nổ, nơi đám mây được sử dụng cho các đột biến bất ngờ.',
      'Một nơi thí nghiệm, nơi đám mây được sử dụng với vùng làm việc tạm thời.'
    ],
    correctAnswer: 1
  },
  {
    question: 'Câu 186: VMware vSphere là phần mềm gì ?',
    options: ['Chương trình ảo hóa dành cho desktop', 'Chương trình ảo hóa dành cho máy chủ, máy trạm', 'Quản lý hạ tầng mạng trong điện toán đám mây', '2010'],
    correctAnswer: 3
  },
  {
    question: 'Câu 187: Các vấn đề liên quan đến bảo mật trên đám mây lai',
    options: [
      'Không kiểm soát trên dữ liệu, bảo mật và bảo trì được giao phó cho nhà cung cấp dịch vụ của bạn',
      'Logic resource template and Application template',
      'Không trực tiếp kiểm soát về sao lưu, tăng nguy cơ mất dữ liệu',
      'Không biết các vị trí vật lý của dữ liệu'
    ],
    correctAnswer: 1
  },
  {
    question: 'Câu 188: Storage Vmotiontrong vSphere để làm gì ?',
    options: [
      'Mở rộng tài nguyên CPU, RAM của host mà không cần có downtime',
      'Đảm bảo tính liên tục của công việc khi một hệ thống có lỗi',
      'Di chuyển nhanh chóng các máy ảo sang một hệ thống khác mà không có',
      'dữ liệu'
    ],
    correctAnswer: 3
  },
  {
    question: 'Câu 189: Đâu không phải là lợi ích khi triển khai đám mây lai:',
    options: [
      'Hỗ trợ khả năng kiểm soát dữ liệu đa dạng, tăng tốc độ truy cập giữa hệ thông và các ứng dụng',
      'Không có đáp án đúng',
      'Tăng khả năng mở rộng mà không cần nâng cấp cơ sở hạ tầng',
      'hỗ trợ xử lý cao điểm - nhiều thời điểm khi khả năng xử lý của đám mây nội bộ không thể đáp ứng được nhu cầu trong doanh nghiệp'
    ],
    correctAnswer: 1
  },
  {
    question: 'Câu 190: Google App Engine được phát triển theo mô hình nào sau đây ?',
    options: ['Software-as-a-Service', 'Infrastructure-as-a-Service', 'Storage-as-a-Service', 'Không có đáp án đúng'],
    correctAnswer: 3
  },
  {
    question: 'Câu 191: Google Compute Engine là giải pháp gì?',
    options: ['Không có đáp án đúng', 'Giải pháp ảo hoá cho máy chủ vật lý cá nhân', 'Giải pháp cung cấp nền tảng để phát triển ứng dụng trên đám mây', 'Giải pháp triển khai đám mây riêng cho doanh nghiệp'],
    correctAnswer: 0
  },
  {
    question: 'Câu 192: Các dịch vụ từ đám mây công cộng nào có thể kết hợp đưa vào đám mây lai',
    options: ['Amazone', 'Logic resource template and Application template', 'Microsoft', 'Google'],
    correctAnswer: 1
  },
  {
    question: 'Câu 193: Đâu là lợi ích của đám mây lai ?',
    options: [
      'Doanh nghiêp có thể cắt giảm khả năng lưu trữ nội bộ bởi vì bạn có thể di chuyển tất cả các dữ liệu không cần thiết lên đám mây bên ngoài của bạn và chỉ lưu trữ tại chỗ dữ liệu quan trọng nhất.',
      'Hỗ trợ khả năng kiểm soát dữ liệu đa dạng, tăng tốc độ truy cập giữa hệ thông và các ứng dụng',
      'Logic resource template and Application template',
      'Đám mây lai hỗ trợ xử lý cao điểm - nhiều thời điểm khi khả năng xử lý của đám mây nội bộ không thể đáp ứng được nhu cầu trong doanh nghiệp.'
    ],
    correctAnswer: 2
  },
  {
    question: 'Câu 194: Dịch vụ Google App Engine hỗ trợ cho công nghệ lập trình nào để xây dựng các ứng dụng đám mây',
    options: ['Java, VB 6.0', 'web services and web 2.0 access technology', 'C++, Pascal', 'VB 6.0, VB.Net'],
    correctAnswer: 1
  },
  {
    question: 'Câu 195: Dịch vụ điện toán đám mây Google cung cấp gồm những gì ?',
    options: ['Google Apps', 'Google App Engine', 'Google Compute Engine', 'Không có đáp án đúng'],
    correctAnswer: 3
  },
  {
    question: 'Câu 196: Đám mây Hybrid (lai) là gì?',
    options: [
      'Là mô hình trong đó hạ tầng đám mây được sở hữu bởi một tổ chức và phục vụ cho người dùng của tôt chức đó',
      'Là mô hình mà hạ tầng đám mây được một tổ chức sỡ hữu và cung cấp dịch vụ rộng ri cho tất cả các khách hàng thông qua hạ tầng mạng Internet hoặc các mạng công cộng diện rộng',
      'Là mô hình bao gồm hai hoặc nhiều hơn các đám mây trên tích hợp chia sẻ hạ tầng với nhau',
      'Không có đáp án đúng'
    ],
    correctAnswer: 3
  },
  {
    question: 'Câu 197: Dịch vụ Google Compute Engine được xem như là loại hình',
    options: ['Software as a Service', 'Database as a Service', 'Platform as a Service', 'web services and web 2.0 access technology'],
    correctAnswer: 3
  },
  {
    question: 'Câu 198: Đâu không phải là kịch bản để ứng dụng Windows Azure',
    options: ['Tạo môt ứng dụng web có khả năng mở rộng', 'Tạo môt ứng dụng xử lí song song', 'Tạo một ứng dụng Web với dữ liệu quan hệ', 'PaaS'],
    correctAnswer: 3
  },
  {
    question: 'Câu 199: Các thành phần chính trong trong Windows Azure Platform gồm:',
    options: [
      'Windows Server 2008, SQL Azure,Windows Azure Platform ApppFabric',
      'Windows Server 2008, SQL Server, IIS',
      'Windows Server 2008, SQL Azure, Apache, Windows Azure Platform ApppFabric',
      'Không có đáp án đúng'
    ],
    correctAnswer: 3
  },
  {
    question: 'Câu 200: Distributed Resource scheduler & distributed power manager trong vSphere để làm gì ?',
    options: ['Tự động cân bằng tải trên storage', 'quản lý tập trung và theo dõi các kết nối mạng', 'nền tảng, thực thi', 'tạo các máy ảo thông qua các template'],
    correctAnswer: 2
  },
  {
    question: 'Câu 201: VMware Sphere phiên bản 5.5 hỗ trợ cấu hình đến mức nào cho mỗi host (máy chủ cài đặt vSphere)?',
    options: ['160 CPU và 2TB RAM', '8 CPU và 1TB RAM', 'Không có đáp án đúng', '32 CPU và 3TB RAM'],
    correctAnswer: 2
  },
  {
    question: 'Câu 202: Giải pháp VMware vCloud Suite bao gồm những phần mềm nào?',
    options: ['VMware vSphere', 'VMware vCloud Director', 'Không có phương án đúng', 'VMware vCloud Networking and Security và vCenter Site Recovery Manager'],
    correctAnswer: 2
  },
  {
    question: 'Câu 203: Google App Engine là gì',
    options: ['Là phần mềm ảo hoá của Google', 'Là dịch vụ PaaS', 'Là dịch vụ phân phối hạ tầng máy tính', 'Là dịch vụ cung cấp ứng dụng trên đám mây'],
    correctAnswer: 1
  },
  {
    question: 'Câu 204: SQL Azure là gì?',
    options: ['Là môt phần của Microsoft SQL Server', 'Là dịch vụ cơ sở dữ liệu quan hệ của Microsoft trên máy chủ ảo', 'Là dịch vụ cơ sở dữ liệu quan hệ trên máy chủ', 'Iaas, Paas'],
    correctAnswer: 3
  },
  {
    question: 'Câu 205: Dịch vụ Google Cloud SQL của Google là loại hình dịch vụ nào (trả lời đúng nhất)',
    options: ['Software as a Service', 'application monitoring, logic resource monitoring', 'Infrastructure as a Service', 'Platform as a Service'],
    correctAnswer: 1
  },
  {
    question: 'Câu 206: SmartCloud Enterprise là giải pháp đám mây do công ty nào phát triển?',
    options: ['Microsoft', 'Oracle', 'VMware', 'IaaS, PaaS, SaaS'],
    correctAnswer: 3
  },
  {
    question: 'Câu 207: SQL Azure dựa vào cơ cấu cơ sở dữ liệu quan hệ nào sau đây:',
    options: ['My SQL', 'Oracle', 'DB2', 'Paas, Saas'],
    correctAnswer: 3
  },
  {
    question: 'Câu 208: Đám mây SmartCloud Enterprise làm việc với các hệ điều hành nào?',
    options: ['Linux,Windows, Ubuntu, Mac OS', 'Windows, Mac OS', 'Linux,Windows, Ms-DOS, Android', 'Không có đáp án đúng'],
    correctAnswer: 3
  },
  {
    question: 'Câu 209: Chức năng Storage DRS trong vSphere để làm gì?',
    options: ['Thiết lập lưu trữ trong ảo hoá', 'Bảo vệ dữ liệu, backup và restore các máy ảo', 'Cho phép tạo, cấu hình các vùng bảo mật', 'Không có đáp án đúng'],
    correctAnswer: 3
  },
  {
    question: 'Câu 210: VMware vClond Suite là sản phẩm của công ty nào?',
    options: ['Microsoft', 'IBM', 'Không có đáp án đúng', 'Oracle'],
    correctAnswer: 2
  },
  {
    question: 'Câu 211: Tính năng chính của Hyper–V là gì?',
    options: ['PaaS', 'Hỗ trợ kết nối nhiều server với nhau', 'Xây dựng hệ quản trị cơ sở dữ liệu trên đám mây', 'Hỗ trợ ảo hoá và điện toán đám mây'],
    correctAnswer: 0
  },
  {
    question: 'Câu 212: Chức năng của VMware vCloud Networking and Security là gì?',
    options: ['Sao lưu và phục hồi cấu hình đám mây', 'Khôi phục thảm hoạ trên đám mây', 'Software and a Service', 'Phân bố tài nguyên đám mây'],
    correctAnswer: 2
  },
  {
    question: 'Câu 213: Vmotion trong vSphere để làm gì?',
    options: ['Di chuyển động các máy ảo sang các phân vùng storage khác mà không có downtime', 'Không có đáp án đúng', 'Đảm bảo tính liên tục của công việc khi một hệ thống có lỗi', 'Mở rộng tài nguyên CPU, RAM của host mà không cần có downtime'],
    correctAnswer: 1
  },
  {
    question: 'Câu 214: Sản phẩm VMware inc nào cung cấp giải pháp ảo hoá - điện toán đám mây?',
    options: ['VMware vSphere', 'Không có phát biểu nào đúng', 'Tất cả các ý', 'VMware vCloud Director'],
    correctAnswer: 1
  },
  {
    question: 'Câu 215: Chức năng của vCentrer Site Recovery Manager là gì?',
    options: ['Không có đáp án đúng', 'Cho phép tạo ra các dịch vụ mang ảo', 'Tự động cập nhật các phiên bản mới cho VMware vCloud Suite', 'Khôi phục và phục hồi trạng thái trước khi cài đặt'],
    correctAnswer: 0
  },
  {
    question: 'Câu 216: Windows Azure là gì?',
    options: ['Là hệ điều hành máy chủ mới của Microsoft', 'Là hệ điều hành đám mây của Microsoft', 'Là hệ điều hành chạy trên các máy ảo trên đám mây', 'Là một phần mềm hỗ trợ cho Windows Server'],
    correctAnswer: 1
  },
  {
    question: 'Câu 217: Các máy chủ trong Google Compute Engine hỗ trợ những hệ điều hành nào:',
    options: ['Windows Azure, Linux, Red Hat', 'Tính riêng tư, tính sẵn dùng, tính di động dữ liệu, mất dữ liệu, khả năng bảo mật', 'Windows Server, Linux, Red Hat, Centos', 'Hỗ trợ mọi phiên bản Windows, Linux, Red Hat, Centos'],
    correctAnswer: 1
  },
  {
    question: 'Câu 218: Các máy chủ ảo do Windows Azure tạo ra có thể chạy được các hệ điều hành nào sau đây?',
    options: ['PaaS', 'Windows Server 8', 'Linux', 'Windows Server 2008 R2'],
    correctAnswer: 0
  },
  {
    question: 'Câu 219: Vmware vCloud Director cung cấp khả năng quản lí tài nguyên ảo qua giao diện nào?',
    options: ['Giao diện trên Windows', 'nền tảng, thực thi, ứng dụng, dữ liệu', 'Giao diện thiết bị chuyện dụng', 'Giao diện trên Linux'],
    correctAnswer: 1
  },
  {
    question: 'Câu 220: Dịch vụ Google Cloud Storage là dịch vụ để lưu trữ của Google, nó thuộc loại hình dịch vụ nào?',
    options: ['Software as a Service', 'Database as a Service', 'application monitoring, logic resource monitoring', 'Platform as a Service'],
    correctAnswer: 2
  },
  {
    question: 'Câu 221: Đâu là tình năng không thuộc thành phần VMware vSphere?',
    options: ['Không có đáp án đúng', 'Configuration Backup & Restore', 'Roll-back và Recovery', 'Network Health Check'],
    correctAnswer: 0
  },
  {
    question: 'Câu 222: Dịch vụ nào của Google dùng để làm nền tảng xây dựng các ứng dụng SaaS',
    options: ['web services and web 2.0 access technology', 'Google drives', 'Google Search', 'Google docs'],
    correctAnswer: 0
  },
  {
    question: 'Câu 223: Thành phần nào không phải của Windows Azure bao gồm:',
    options: ['Computer Service', 'Storage Service', 'Windows Azure Fabric', 'Saas'],
    correctAnswer: 3
  },
  {
    question: 'Câu 224: Windows Azure do công ty nào phát triển?',
    options: ['Microsoft', 'IBM', 'Không có đáp án đúng', 'Oracle'],
    correctAnswer: 2
  },
  {
    question: 'Câu 225: Bộ dịch vụ lưu trữ trong Windows Azure gồm thành phần nào:',
    options: ['Paas, Saas', 'Blob, Table, Sheet', 'Table, SQL Azure', 'SQL, Table, Queue, Sheet'],
    correctAnswer: 0
  },
  {
    question: 'Câu 226: Windows Azure Platform là gì?',
    options: ['Một hệ điều hành cho máy tính', 'Hệ điều hành Windows cho máy chủ đám mây', 'Không có đáp án đúng', 'Phần mềm quản lý đám mây ảo'],
    correctAnswer: 2
  },
  {
    question: 'Câu 227: Chức năng của VMware vCloud Director là gì?',
    options: ['ảo hoá các máy chủ', 'ảo hoá hệ thống mạng', 'Quản lý mạng ảo', 'nền tảng, thực thi, ứng dụng, dữ liệu'],
    correctAnswer: 3
  },
  
  {
    question: 'Câu 1: Các bước tạo máy chủ ảo Google Engine thứ tự như thế nào?',
    options: [
      'VM instances/ Computer engine/new instances / config VM',
      'Config VM/ Computer engine/VM instances/new instances',
      'Computer engine/VM instances/ config VM /new instances',
      'Computer engine/VM instances/new instances / config VM'
    ],
    correctAnswer: 3
  },
  {
    question: 'Câu 2: Điện toán máy chủ ảo gồm mấy thành phần?',
    options: ['2', '3', '4', '5'],
    correctAnswer: 3
  },
  {
    question: 'Câu 3: Thứ tự đúng của mô hình điện toán máy chủ ảo?',
    options: [
      'Client – Application– Infrastructure –Server – Platform.',
      'Client – Platform – Application– Infrastructure –Server.',
      'Client – Infrastructure – Platform –Application –Server.',
      'Client – Application– Platform – Infrastructure –Server.'
    ],
    correctAnswer: 3
  },
  {
    question: 'Câu 4: Điện toán máy chủ ảo hoạt động gồm có mấy lớp?',
    options: ['5 lớp', '4 lớp', '3 lớp', '2 lớp'],
    correctAnswer: 3
  },
  {
    question: 'Câu 5: Mô hình dịch vụ trong kiến trúc của điện toán đám mây là gì?',
    options: ['Software-as-a-Service', 'Platform-as-a-Service', 'Infrastructure-as-a-Service', 'Cả 3 mô hình dịch vụ'],
    correctAnswer: 3
  },
  {
    question: 'Câu 6: Có mấy mô hình triển khai của điện toán đám mây trong thực tế ?',
    options: ['2', '3', '5', '4'],
    correctAnswer: 3
  },
  {
    question: 'Câu 7: Phát biểu nào sai về đám mây cộng cộng ?',
    options: [
      'Là mô hình các dịch vụ đám mây được bên thứ ba cung cấp.',
      'Các đám mây tồn tại ngoài tường lửa của công ty và tổ chức sử dụn',
      'Các đám mây được lưu trữ đầy đủ và được nhà cung cấp đám mây quản lý.',
      'Đám mây tồn tại bên trong tường lửa của các tổ chức và được tổ chức quản lý trực tiếp.'
    ],
    correctAnswer: 3
  },
  {
    question: 'Câu 8: Đám mây công cộng cung cấp những dịch vụ nào .',
    options: [
      'Infrastructure-as-a-Servic',
      'Infrastructure-as-a-Service và Software-as-a-Service',
      'Platform-as-a-Service và Software-as-a-Service',
      'Infrastructure-as-a-Service, Platform-as-a-Service và Software-as-a-Service'
    ],
    correctAnswer: 3
  },
  {
    question: 'Câu 9: Khi sử dụng đám mây công cộng khách hàng phải trả những chi phí nào?',
    options: [
      'Chi phí về quản lý phần cứn',
      'Chi phí về Phần mềm dịch vụ.',
      'Chi phí về bảo trì hệ thốn',
      'Chi phí cho các tài nguyên sử dụn'
    ],
    correctAnswer: 3
  },
  {
    question: 'Câu 10: Phát biểu nào đúng về đám mây riêng?',
    options: [
      'Là mô hình các dịch vụ đám mây được bên thứ ba cung cấp.',
      'Các đám mây tồn tại ngoài tường lửa của công ty và tổ chức sử dụn',
      'Các đám mây được lưu trữ đầy đủ và được nhà cung cấp đám mây quản lý.',
      'Đám mây tồn tại bên trong tường lửa của các tổ chức và được tổ chức quản lý trực tiếp.'
    ],
    correctAnswer: 3
  },
  {
    question: 'Câu 11: Public clouds là gì?',
    options: [
      'Là đám mây được chia sẻ bởi một số tổ chức và hỗ trợ một cộng đồng cụ thể có mối quan tâm chun',
      'Là đám mây được quản lý bởi các công ty lớn chuyên cung cấp các dịch vụ cho cộng đồn',
      'Là đám mây được cung cấp bên trong của một tổ chức xã hội.',
      'Là đám mây công cộng cố gắng cung cấp cho người tiêu dùng các phần tử công nghệ thông tin tốt nhất.'
    ],
    correctAnswer: 3
  },
  {
    question: 'Câu 12: Khi nào thì lựa chọn dịch vụ đám mây công cộng ( public cloud)?',
    options: [
      'Người dùng có các ứng dụng Infrastructure-as-a-Service từ một nhà cung cấp có chiến lượng an ninh thực hiện tốt.',
      'Người dùng có các ứng dụng Platform-as-a-Service từ một nhà cung cấp có chiến lượng an ninh thực hiện tốt.',
      'Cả 3 phương án.',
      'Người dùng có các ứng dụng Software-as-a-Service từ một nhà cung cấp có chiến lượng an ninh thực hiện tốt.'
    ],
    correctAnswer: 3
  },
  {
    question: 'Câu 13: Doanh nghiệp triển khai đám mây riêng gặp những khó khăn gì?',
    options: [
      'Chi phí của việc thiết lập đám mây bên trong có thể có chiều hướng găn cản việc sử dụn',
      'Chi phí hoạt động liên tục của đám mây có thể vượt chi phí sử dụng một đám mây chun',
      'Trách nhiệp thiết lập và bảo trì đám mây.',
      'Cả 3 đáp án.'
    ],
    correctAnswer: 3
  },
  {
    question: 'Câu 14: Mô hình đám mây riêng có lợi thế gì so với đám mây chung?',
    options: [
      'Đám mây được lưu trữ đầy đủ và được quản lý chặt chẽ.',
      'Phân bố tải workload cho các ứng dụng được sử dụng bởi nhiều người.',
      'Có thể phục vụ tốt các quy trình nhiệp vụ tới hạn, an toàn, như các khoản thanh toán của khách , xử lý bảng lương của nhân viên…',
      'Kiểm soát chi tiết hơn trên các tài nguyên khách nhau đang tạo thành một đám mây mang lại cho tất cả các tùy chọn cấu hình có sẵn.'
    ],
    correctAnswer: 3
  },
  {
    question: 'Câu 15: Mô hình đám mây nào thích hợp với doanh nghiệp?',
    options: ['Đám mây cộng đồn', 'Đám mây công cộn', 'Đám mây lai.', 'Đám mây riên'],
    correctAnswer: 3
  },
  {
    question: 'Câu 16: Tổ chức hỗ trợ cộng đồng phù hợp với việc triển khai mô hình đám mây nào?',
    options: ['Private clou', 'Public clou', 'Hybrid clou', 'Community clou'],
    correctAnswer: 3
  },
  {
    question: 'Câu 17: Dịch vụ đám mây Google Computer Engine và Cloud SDK để thao tác với loại dịch vụ nào?',
    options: ['Software-as-a-Servic', 'Platform-as-a-Servic', 'Không có đáp án đún', 'Infrastructure-as-a-Servic'],
    correctAnswer: 3
  },
  {
    question: 'Câu 18: Google App Engine được sử dụng để thao tác triển khai loại dịch vụ nào trong điện toán đám mây.',
    options: ['Infrastructure-as-a-Servic', 'Tất cả đáp án .', 'Software-as-a-Servic', 'Platform-as-a-Servic'],
    correctAnswer: 3
  },
  {
    question: 'Câu 19: sử dụng Google App Engine và App Engine PHP SDK để chạy website hỗ trợ ngôn ngữ và cơ sở dữ liệu nào?',
    options: ['PHP và SQL.', 'ASP và Acces', 'Java và oracle .', 'PHP và My SQL.'],
    correctAnswer: 3
  },
  {
    question: 'Câu 20: App Engine PHP SDK của hãng nào?',
    options: ['IBM.', 'Amazon.', 'Oracl', 'Google'],
    correctAnswer: 3
  },
  {
    question: 'Câu 21: EC2 là nền tảng cơ sở hạ tầng điện toán đám mây do hãng nào cung cấp?',
    options: ['Microsoft.', 'IBM.', 'Googl', 'Amazon.'],
    correctAnswer: 3
  },
  {
    question: 'Câu 22: Dịch vụ nào Google cung cấp miễn phí.',
    options: ['Cloud SQL', 'PreviewCloud Datastore', 'Compute Engine', 'Goole drive'],
    correctAnswer: 3
  },
  {
    question: 'Câu 23: Dịch vụ EC2 của Amazon ra mắt lần đầu vào năm nào?',
    options: ['2009', '2008', '2007', '2006'],
    correctAnswer: 3
  },
  {
    question: 'Câu 24: VPS là gì?',
    options: ['Virtual pet sit', 'Video programming System.', 'Vietnamese professinals Society.', 'Virtual private server.'],
    correctAnswer: 3
  },
  {
    question: 'Câu 25: Các dịch vụ như gmail, google doc, facebook thuộc loại dịch vụ nào của điện toán đám mây?',
    options: ['Infrastructure-as-a-Servic', 'Platform-as-a-Servic', 'Không có đáp án đún .', 'Software-as-a-Servic'],
    correctAnswer: 3
  },
  {
    question: 'Câu 26: Ứng dụng nào sau đây không sử dụng dịch vụ của đám mây?',
    options: ['Google doc', 'Facebook', 'Google Drive', 'Open office'],
    correctAnswer: 3
  },
  {
    question: 'Câu 27: Chức năng Preview Cloud Datastore (cơ sở dữ liệu ảo) của điện toán máy chủ ảo do hãng nào cung cấp?',
    options: ['Amazon', 'Microsoft', 'IBM', 'Google'],
    correctAnswer: 3
  },
  {
    question: 'Câu 28: Tính năng nào không được google hỗ trợ cho một máy chủ ảo?',
    options: ['Metadata', 'Image', 'Quotas', 'E-mail'],
    correctAnswer: 3
  },
  {
    question: 'Câu 29: Phần nào không cần khai báo khi cấu hình máy chủ ảo?',
    options: ['Name', 'Tag', 'Zone', 'Cloud SQL'],
    correctAnswer: 3
  },
  {
    question: 'Câu 30: Dịch vụ điện toán đám mây nào không phải do Google cung cấp?',
    options: ['Dropbox', 'Chrome', 'Youtube', 'OneDrive'],
    correctAnswer: 3
  },
  {
    question: 'Câu 31: Dịch vụ lưu trữ đám mây OneDrive là sản phẩm của công ty nào?',
    options: ['Google', 'Amazon', 'Không có đáp án đúng', 'Microsoft'],
    correctAnswer: 3
  },
  {
    question: 'Câu 32: Nền tảng nào không phải là nền tảng của điện toán đám mây?',
    options: ['Windows Azure', 'Amazone Webservice', 'Facebook', 'Không có đáp án đúng'],
    correctAnswer: 3
  },
  {
    question: 'Câu 33: Google App Engine cung cấp mấy môi trường thực thi tốt cho các ứng dụng?',
    options: ['4', '3', '1', '2'],
    correctAnswer: 3
  },
  {
    question: 'Câu 34: Phát biểu dưới đây đâu là phát biểu sai?',
    options: [
      'App Engine hỗ trợ HTTPS đối với domain con của .appspot.com những vẫn chưa hỗ trợ đối với các domain khá',
      'Khi sử dụng Google app engine các nhà đầu tư e ngại vì toàn bộ dữ liệu đều nằm trong tay nhà cung cấp dịch vụ.',
      'Sử dụng google app engine thì phải phụ thuộc hoàn toàn vào dịch vụ của googl',
      'Hiện Google App Engine hỗ trợ các ngôn ngữ là:Python, Java, Delphi.'
    ],
    correctAnswer: 3
  },
  {
    question: 'Câu 35: Khi làm quen Google App Engine, Google cung cấp lập trình viên bao nhiêu tài nguyên miễn phí.',
    options: ['100MB', '1GB', '250MB', '500MB'],
    correctAnswer: 3
  },
  {
    question: 'Câu 36: Google App Engine có bao nhiêu thành phần chính?',
    options: ['5', '7', '8', '6'],
    correctAnswer: 3
  },
  {
    question: 'Câu 37: Amazone cung cấp miễn phí tài khoản Amazone EC2 trong thời gian bao lâu?',
    options: ['3 tháng', '6 tháng', '9 tháng', '12 tháng'],
    correctAnswer: 3
  },
  {
    question: 'Câu 38: VMware vClond Suite là sản phẩm của công ty nào?',
    options: ['Microsoft', 'IBM', 'Oracle', 'VMware Inc'],
    correctAnswer: 3
  },
  {
    question: 'Câu 39: Sản phẩm VMware inc nào cung cấp giải pháp ảo hoá - điện toán đám mây?',
    options: ['VMware vSphere', 'VMware vCloud Director', 'Tất cả các ý', 'VMware vCloud Suite'],
    correctAnswer: 3
  },
  {
    question: 'Câu 39. Giải pháp VMware vCloud Suite bao gồm những phần mềm nào?',
    options: [
      'VMware vSphere',
      'VMware vCloud Director',
      'VMware vCloud Networking and Security và vCenter Site Recovery Manager',
      'Tất cả các ý trên'
    ],
    correctAnswer: 3
  },
  {
    question: 'Câu 40: VMware vSphere là phần mềm gì ?',
    options: [
      'Chương trình ảo hóa dành cho desktop',
      'Chương trình ảo hóa dành cho máy chủ, máy trạm',
      'Quản lý hạ tầng mạng trong điện toán đám mây',
      'Hỗ trợ ảo hóa cho phép xây dựng hạ tầng điện toán đám mây.'
    ],
    correctAnswer: 3
  },
  {
    question: 'Câu 41: Đâu là tình năng không thuộc thành phần VMware vSphere?',
    options: ['Network Health Check', 'Configuration Backup & Restore', 'Roll-back và Recovery', 'VMware Director'],
    correctAnswer: 3
  },
  {
    question: 'Câu 42: VMware Sphere phiên bản 5.5 hỗ trợ cấu hình đến mức nào cho mỗi host (máy chủ cài đặt vSphere ) ?',
    options: ['160 CPU và 2TB RAM', '8 CPU và 1TB RAM', '32 CPU và 3TB RAM', '320 CPU và 4TB RAM'],
    correctAnswer: 3
  },
  {
    question: 'Câu 43: Chức năng Storage DRS trong vSphere để làm gì ?',
    options: ['Thiết lập lưu trữ trong ảo hoá', 'Bảo vệ dữ liệu, backup và restore các máy ảo', 'Cho phép tạo, cấu hình các vùng bảo mật', 'Tự động cân bằng tải trên storage'],
    correctAnswer: 3
  },
  {
    question: 'Câu 44: Distributed Resource scheduler & distributed power manager trong vSphere để làm gì ?',
    options: [
      'Tự động cân bằng tải trên storage',
      'quản lý tập trung và theo dõi các kết nối mạng',
      'tạo các máy ảo thông qua các template',
      'Quản lý tập trung tài nguyên các server (host) thành 1 khối và tự động cân bằng tải.'
    ],
    correctAnswer: 3
  },
  {
    question: 'Câu 45: Vmotion trong vSphere để làm gì ?',
    options: [
      'Di chuyển động các máy ảo sang các phân vùng storage khác mà không có downtime',
      'Mở rộng tài nguyên CPU, RAM của host mà không cần có downtime',
      'Đảm bảo tính liên tục của công việc khi một hệ thống có lỗi',
      'Di chuyển nhanh chóng các máy ảo sang một hệ thống khác mà không có downtime'
    ],
    correctAnswer: 3
  },
  {
    question: 'Câu 46: Storage Vmotiontrong vSphere để làm gì ?',
    options: [
      'Mở rộng tài nguyên CPU, RAM của host mà không cần có downtime',
      'Đảm bảo tính liên tục của công việc khi một hệ thống có lỗi',
      'Di chuyển nhanh chóng các máy ảo sang một hệ thống khác mà không có',
      'Di chuyển động các máy ảo sang các phân vùng storage khác mà không có downtime'
    ],
    correctAnswer: 3
  },
  {
    question: 'Câu 47: Hot add trong vSphere để làm gì ?',
    options: [
      'Mở rộng tài nguyên CPU, RAM của host mà không cần có downtime',
      'Đảm bảo tính liên tục của công việc khi một hệ thống có lỗi',
      'Di chuyển nhanh chóng các máy ảo sang một hệ thống khác mà không có downtime',
      'Cho phép mở rộng tài nguyên CPU, RAM của host mà không cần có downtime'
    ],
    correctAnswer: 3
  },
  {
    question: 'Câu 48: Chức năng của VMware vCloud Director là gì ?',
    options: ['Ảo hoá các máy chủ', 'Ảo hoá hệ thống mạng', 'Quản lý mạng ảo', 'Quản lý tài nguyên vật lý để tạo thành những datacenter ảo'],
    correctAnswer: 3
  },
  {
    question: 'Câu 49: Vmware vCloud Director cung cấp khả năng quản lí tài nguyên ảo qua giao diện nào ?',
    options: ['Giao diện trên Windows', 'Giao diện trên Linux', 'Giao diện thiết bị chuyện dụng', 'Giao diện web'],
    correctAnswer: 3
  },
  {
    question: 'Câu 50: Chức năng của VMware vCloud Networking and Security là gì ?',
    options: [
      'Sao lưu và phục hồi cấu hình đám mây',
      'Khôi phục thảm hoạ trên đám mây',
      'Phân bố tài nguyên đám mây',
      'Tạo ra các dịch vụ và mạng ảo độc lập với phần cứng mạng vật lý'
    ],
    correctAnswer: 3
  },
  {
    question: 'Câu 51: Chức năng của vCentrer Site Recovery Manager là gì ?',
    options: [
      'Khôi phục và phục hồi trạng thái trước khi cài đặt',
      'Cho phép tạo ra các dịch vụ mang ảo',
      'Tự động cập nhật các phiên bản mới cho VMware vCloud Suite',
      'Tự động hoá khôi phục thảm hoạ cho các ứng dụng trên đám mây'
    ],
    correctAnswer: 3
  },
  {
    question: 'Câu 52: Windows Azure do công ty nào phát triển?',
    options: ['Microsoft', 'IBM', 'Oracle', 'VMware'],
    correctAnswer: 3
  },
  {
    question: 'Câu 53: Windows Azure Platform là gì?',
    options: [
      'Một hệ điều hành cho máy tính',
      'Hệ điều hành Windows cho máy chủ đám mây',
      'Phần mềm quản lý đám mây ảo',
      'Nhóm các công nghệ điện toán đám mây cung cấp một tập hợp các dịch vụ đặc trưng để phát triển ứng dụng'
    ],
    correctAnswer: 3
  },
  {
    question: 'Câu 54: Các thành phần chính trong trong Windows Azure Platform gồm:',
    options: [
      'Windows Server 2008, SQL Azure,Windows Azure Platform ApppFabric',
      'Windows Server 2008, SQL Server, IIS',
      'Windows Server 2008, SQL Azure, Apache, Windows Azure Platform ApppFabric',
      'Windows Azure, SQL Azure,Windows Azure Platform ApppFabric'
    ],
    correctAnswer: 3
  },
  {
    question: 'Câu 55: Windows Azure là gì?',
    options: [
      'Là hệ điều hành máy chủ mới của Microsoft',
      'Là một phần mềm hỗ trợ cho Windows Server',
      'Là hệ điều hành chạy trên các máy ảo trên đám mây',
      'Là một hệ điều hành dung để chạy các ứng dụng Windows và lưu dữ liệu của nó trên đám mây'
    ],
    correctAnswer: 3
  },
  {
    question: 'Câu 56: Thành phần nào không phải của Windows Azure bao gồm:',
    options: ['Computer Service', 'Storage Service', 'Windows Azure Fabric', 'Network Service'],
    correctAnswer: 3
  },
  {
    question: 'Câu 57: SQL Azure là gì ?',
    options: [
      'Là môt phần của Microsoft SQL Server',
      'Là dịch vụ cơ sở dữ liệu quan hệ của Microsoft trên máy chủ ảo',
      'Là dịch vụ cơ sở dữ liệu quan hệ trên máy chủ',
      'Là dịch vụ cơ sở dữ liệu quan hệ của Microsoft trên đám mây'
    ],
    correctAnswer: 3
  },
  {
    question: 'Câu 58: SQL Azure dựa vào cơ cấu cơ sở dữ liệu quan hệ nào sau đây:',
    options: ['My SQL', 'Oracle', 'DB2', 'Microsoft SQL Server'],
    correctAnswer: 3
  },
  {
    question: 'Câu 59: Bộ dịch vụ lưu trữ trong Windows Azure gồm thành phần nào:',
    options: ['SQL, Table, Queue, Sheet', 'Blob, Table, Sheet', 'Table, SQL Azure', 'Blob, Table, Queue'],
    correctAnswer: 3
  },
  {
    question: 'Câu 60: Đâu không phải là kịch bản để ứng dụng Windows Azure',
    options: [
      'Tạo môt ứng dụng web có khả năng mở rộng',
      'Tạo môt ứng dụng xử lí song song',
      'Tạo một ứng dụng Web với dữ liệu quan hệ',
      'Tạo nhiều mạng ảo giữa các máy tính trọng mạng'
    ],
    correctAnswer: 3
  },
  {
    question: 'Câu 61: Các máy chủ ảo do Windows Azure tạo ra có thể chạy được các hệ điều hành nào sau đây ?',
    options: ['Windows Server 2008 R2', 'Windows Server 8', 'Linux', 'Tất cả các ý'],
    correctAnswer: 3
  },
  {
    question: 'Câu 62: Tính năng chính của Hyper –V là gì?',
    options: [
      'Hỗ trợ ảo hoá và điện toán đám mây',
      'Hỗ trợ kết nối nhiều server với nhau',
      'Xây dựng hệ quản trị cơ sở dữ liệu trên đám mây',
      'Tăng cường, cải thiện hiệu suất của máy ảo và cung cấp một nền tảng ảo hóa có khả năng mở rộng cho các triển khai điện toán đám mây'
    ],
    correctAnswer: 3
  },
  {
    question: 'Câu 63: SmartCloud Enterprise là giải pháp đám mây do công ty nào phát triển?',
    options: ['Microsoft', 'Oracle', 'VMware', 'IBM'],
    correctAnswer: 3
  },
  {
    question: 'Câu 64: SmartCloud Enterprise được phát triển theo mô hình nào sau đây?',
    options: ['PaaS', 'SaaS', 'Tất cả các mô hình', 'IaaS'],
    correctAnswer: 3
  },
  {
    question: 'Câu 65: Đám mây SmartCloud Enterprise làm việc với các hệ điều hành nào?',
    options: ['Linux,Windows, Ubuntu, Mac OS', 'Windows, Mac OS', 'Linux,Windows, Ms-DOS, Android', 'Windows, Linux'],
    correctAnswer: 3
  },
  {
    question: 'Câu 66: Dịch vụ điện toán đám mây Google cung cấp gồm những gì ?',
    options: ['Google Apps', 'Google App Engine', 'Google Compute Engine', 'Tất cả các ý'],
    correctAnswer: 3
  },
  {
    question: 'Câu 67: Google Compute Engine là giải pháp gì?',
    options: [
      'Giải pháp triển khai đám mây riêng cho doanh nghiệp',
      'Giải pháp ảo hoá cho máy chủ vật lý cá nhân',
      'Giải pháp cung cấp nền tảng để phát triển ứng dụng trên đám mây',
      'Giải pháp máy chủ áo trên đám mây của Googlecho các cá nhân và doanh nghiệp'
    ],
    correctAnswer: 3
  },
  {
    question: 'Câu 68: Các máy chủ trong Google Compute Engine hỗ trợ những hệ điều hành nào:',
    options: [
      'Windows Azure, Linux, Red Hat',
      'Hỗ trợ mọi phiên bản Windows, Linux, Red Hat, Centos',
      'Windows Server, Linux, Red Hat, Centos',
      'Hỗ trợ tất cả mọi bản Linux - bao gồm cả Red Hat Enterprise, FreeBSD, Debian, Centos'
    ],
    correctAnswer: 3
  },
  {
    question: 'Câu 69: Google App Engine là gì',
    options: [
      'Là phần mềm ảo hoá của Google',
      'Là dịch vụ cung cấp ứng dụng trên đám mây',
      'Là dịch vụ phân phối hạ tầng máy tính',
      'Là một môi trường phát triển ứng dụng dựa trên công nghệ điện toán đám mây'
    ],
    correctAnswer: 3
  },
  {
    question: 'Câu 70: Google App Engine được phát triển theo mô hình nào sau đây ?',
    options: ['Software-as-a-Service', 'Infrastructure-as-a-Service', 'Storage-as-a-Service', 'Platform-as-a-Service'],
    correctAnswer: 3
  },
  {
    question: 'Câu 71: Đám mây Hybrid (lai) là gì?',
    options: [
      'Là mô hình trong đó hạ tầng đám mây được sở hữu bởi một tổ chức và phục vụ cho người dùng của tốt chức đó',
      'Là mô hình mà hạ tầng đám mây được một tổ chức sỡ hữu và cung cấp dịch vụ rộng rãi cho tất cả các khách hàng thông qua hạ tầng mạng Internet hoặc các mạng công cộng diện rộng',
      'Là mô hình bao gồm hai hoặc nhiều hơn các đám mây trên tích hợp chia sẻ hạ tầng với nhau',
      'Là mô hình bao gồm hai hoặc nhiều hơn các đám mây (đám mây riêng và đám mây công cộng) tích hợp với nhau cho phép chia sẻ hạ tầng hoặc đáp ứng nhu cầu trao đổi dữ liệu'
    ],
    correctAnswer: 3
  },
  {
    question: 'Câu 72: Các đám mây lai hầu hết thường được sử dụng làm:',
    options: [
      'Một đối tác, nơi các ứng dụng lưu trú trong đám mây và các ứng dụng quan trọng vẫn còn trên trang we',
      'Một nơi thí nghiệm, nơi đám mây được sử dụng với vùng làm việc tạm thời.',
      'Khả năng bổ sung hay khả năng bùng nổ, nơi đám mây được sử dụng cho các đột biến bất ngờ.',
      'Tất cả các ý'
    ],
    correctAnswer: 3
  },
  {
    question: 'Câu 73: Đâu không phải là lợi ích khi triển khai đám mây lai:',
    options: [
      'Hỗ trợ khả năng kiểm soát dữ liệu đa dạng, tăng tốc độ truy cập giữa hệ thông và các ứng dụng',
      'hỗ trợ xử lý cao điểm - nhiều thời điểm khi khả năng xử lý của đám mây nội bộ không thể đáp ứng được nhu cầu trong doanh nghiệp',
      'Tăng khả năng mở rộng mà không cần nâng cấp cơ sở hạ tầng',
      'Tăng tính an ninh, bảo mật cho đám mây riêng'
    ],
    correctAnswer: 3
  },
  {
    question: 'Câu 74: Đâu là lợi ích của đám mây lai ?',
    options: [
      'Doanh nghiêp có thể cắt giảm khả năng lưu trữ nội bộ bởi vì bạn có thể di chuyển tất cả các dữ liệu không cần thiết lên đám mây bên ngoài của bạn và chỉ lưu trữ tại chỗ dữ liệu quan trọng nhất.',
      'Hỗ trợ khả năng kiểm soát dữ liệu đa dạng, tăng tốc độ truy cập giữa hệ thông và các ứng dụng',
      'Đám mây lai hỗ trợ xử lý cao điểm - nhiều thời điểm khi khả năng xử lý của đám mây nội bộ không thể đáp ứng được nhu cầu trong doanh nghiệp.',
      'Tất cả các ý'
    ],
    correctAnswer: 3
  },
  {
    question: 'Câu 75: Các vấn đề liên quan đến bảo mật trên đám mây lai',
    options: [
      'Không kiểm soát trên dữ liệu, bảo mật và bảo trì được giao phó cho nhà cung cấp dịch vụ của bạn',
      'Không biết các vị trí vật lý của dữ liệu',
      'Không trực tiếp kiểm soát về sao lưu, tăng nguy cơ mất dữ liệu',
      'Tất cả các ý'
    ],
    correctAnswer: 3
  },
  {
    question: 'Câu 76: Các dịch vụ từ đám mây công cộng nào có thể kết hợp đưa vào đám mây lai',
    options: ['Amazone', 'Google', 'Microsoft', 'Tất cả'],
    correctAnswer: 3
  },
  {
    question: 'Câu 77: Kiểu dịch vụ Service monitoring của loại SaaS gồm có những gì?',
    options: ['application monitoring', 'logic resource monitoring', 'physical resource monitoring', 'application monitoring, logic resource monitoring'],
    correctAnswer: 0
  },
  {
    question: 'Câu 78: Kiểu dịch vụ Service level management của loại IaaS gồm có những gì?',
    options: ['dynamic orchestration of physical resources', 'dynamic orchestration of logic resources', 'dynamic orchestration of applications', 'multi-tenancy, network, storage'],
    correctAnswer: 0
  },
  {
    question: 'Câu 79: Kiểu dịch vụ Service level management của loại SaaS gồm có những gì?',
    options: ['dynamic orchestration of applications', 'dynamic orchestration of physical resources', 'dynamic orchestration of logic resources', 'multi-tenancy, network, storage'],
    correctAnswer: 0
  },
  {
    question: 'Câu 80: Kiểu dịch vụ Service level management của loại PaaS gồm có những gì?',
    options: ['dynamic orchestration of logic resources', 'dynamic orchestration of applications', 'dynamic orchestration of physical resources', 'application usage metering'],
    correctAnswer: 0
  },
  {
    question: 'Câu 84: Kiểu dịch vụ Service measurement của loại IaaS gồm có những gì?',
    options: ['physical resource metering', 'logic resource usage metering', 'application usage metering', 'network, storage, and server virtualization'],
    correctAnswer: 0
  },
  {
    question: 'Câu 85: Kiểu dịch vụ Service measurement của loại PaaS gồm có những gì?',
    options: ['logic resource usage metering', 'physical resource metering', 'application usage metering', 'network, storage, and server virtualization'],
    correctAnswer: 0
  },
  {
    question: 'Câu 86: Kiểu dịch vụ Service measurement của loại SaaS gồm có những gì?',
    options: ['application usage metering', 'physical resource metering', 'logic resource usage metering', 'network, storage, and server virtualization'],
    correctAnswer: 0
  },
  {
    question: 'Câu 87: Kiểu dịch vụ Service integration and combination của loại IaaS gồm có những gì?',
    options: ['load balance', 'SOA', 'SOA, mashup', 'usage metering'],
    correctAnswer: 0
  },
  {
    question: 'Câu 88: Kiểu dịch vụ Service integration and combination của loại PaaS gồm có những gì?',
    options: ['SOA', 'load balance', 'SOA, mashup', 'usage metering'],
    correctAnswer: 0
  },
  {
    question: 'Câu 89: Kiểu dịch vụ Service integration and combination của loại SaaS gồm có những gì?',
    options: ['SOA, mashup', 'load balance', 'SOA', 'usage metering'],
    correctAnswer: 0
  },
  {
    question: 'Câu 90: Kiểu dịch vụ security của loại IaaS gồm có những gì?',
    options: [
      'storage encryption and isolation, VM isolation, VLAN, SSL/SSH',
      'data isolation, operating environment isolation, SSL',
      'data isolation, operating environment isolation, SSI, Web authentication and authorization',
      'load balance'
    ],
    correctAnswer: 0
  },
  {
    question: 'Câu 91: Kiểu dịch vụ security của loại PaaS gồm có những gì?',
    options: [
      'data isolation, operating environment isolation, SSL',
      'storage encryption and isolation, VM isolation, VLAN, SSL/SSH',
      'data isolation, operating environment isolation, SSI, Web authentication and authorization',
      'load balance'
    ],
    correctAnswer: 0
  },
  {
    question: 'Câu 92: Kiểu dịch vụ security của loại SaaS gồm có những gì?',
    options: [
      'data isolation, operating environment isolation, SSI, Web authentication and authorization',
      'data isolation, operating environment isolation, SSL',
      'storage encryption and isolation, VM isolation, VLAN, SSL/SSH',
      'storage encryption and isolation, VM isolation'
    ],
    correctAnswer: 0
  },
  {
    question: 'Câu 93: Hãng Viettel IDC nhà cung cấp các dịch vụ điện toán đám mây được thành lập vào năm nào?',
    options: ['2008', '2009', '2010', '2011'],
    correctAnswer: 0
  },
  {
    question: 'Câu 94: Hãng IBM mở trung tâm điện toán đám mây tại thị trường Việt Nam vào năm nào?',
    options: ['2008', '2009', '2010', '2011'],
    correctAnswer: 0
  },
  {
    question: 'Câu 95: Hội thảo “hành trình tới công nghệ điện toán đám mây” do Microsoft tổ chức ngày 2/3/2011 ở đâu?',
    options: ['Hà Nội', 'Thành phố Hồ Chí Minh', 'Đà Nẵng', 'Huế'],
    correctAnswer: 0
  },
  {
    question: 'Câu 96: Doanh nghiệp công nghệ Việt Nam nào duy nhất tham gia sự kiện tại Nhật, ngày 26/2/2014, do tập đoàn Nikkei tổ chức',
    options: ['FPT', 'Viettel IDC', 'VNPT', 'VNTT'],
    correctAnswer: 0
  },
  {
    question: 'Câu 97: Năm 2008, Hãng IBM đã có khách hàng đầu tiên tại Việt Nam là Công ty nào?',
    options: ['VNTT', 'VNPT', 'FPT', 'Viettel IDC'],
    correctAnswer: 0
  },
  {
    question: 'Câu 98: Cách gọi khác về điện toán đám mây?',
    options: ['Không có đáp án đúng', 'Điện toán tự trị', 'Điện toán máy chủ thật', 'Điện toán lưới'],
    correctAnswer: 0
  },
  {
    question: 'Câu 99: Điện toán đám mây có thể được xem như là giai đoạn tự nhiên tiếp theo từ mô hình điện toán nào?',
    options: ['Không có đáp án đúng', 'Mô hình điện toán tự trị', 'Mô hình điện toán theo nhu cầu', 'Mô hình điện toán máy chủ thật'],
    correctAnswer: 0
  },
  {
    question: 'Câu 100: SOA là kiểu kiến trúc, viết tắt của từ gì?',
    options: ['Không có đáp án đúng', 'service oriented a line', 'service of architecture', 'single oriented architecture'],
    correctAnswer: 0
  },
  {
    question: 'Câu 101: Kiến trúc service oriented architecture là kiến trúc gì?',
    options: ['Không có đáp án đúng', 'Kiến trúc hướng đối tượng', 'Kiến trúc hướng theo định hướng duy nhất', 'Kiến trúc đa tác vụ'],
    correctAnswer: 0
  },
  {
    question: 'Câu 102: Phải tự xây dựng bao nhiêu phần trong mô hình dịch vụ IT truyền thống?',
    options: ['4', '3', '2', '1'],
    correctAnswer: 0
  },
  {
    question: 'Câu 103: IaaS là từ ?',
    options: ['Không có đáp án đúng', 'Infrasture as all Service', 'Infrasture as a Server', 'Infra as a Service'],
    correctAnswer: 0
  },
  {
    question: 'Câu 104: Người sử dụng phải tự xây dựng mấy phần nếu thuê dịch vụ IaaS?',
    options: ['3', '4', '2', '1'],
    correctAnswer: 0
  },
  {
    question: 'Câu 105: Người sử dụng phải tự xây dựng mấy phần nếu thuê dịch vụ PaaS?',
    options: ['2', '3', '1', '4'],
    correctAnswer: 0
  },
  {
    question: 'Câu 106: Người sử dụng phải tự xây dựng mấy phần nếu thuê dịch vụ SaaS?',
    options: ['1', '2', '3', '4'],
    correctAnswer: 0
  },
  {
    question: 'Câu 107: Dịch vụ nào của đám mây Google không phát triển theo mô hình Saas',
    options: ['Google mail', 'Goolge drive', 'Google maps', 'Google App Engine'],
    correctAnswer: 3
  },
  {
    question: 'Câu 108: Đâu là dịch vụ của Microsoft được phát triển theo mô hình Saas',
    options: ['Windows Azure', 'Windows Azure Platform', 'OnDrive', 'Office 365'],
    correctAnswer: 3
  },
  {
    question: 'Câu 109: Yếu tố nào không phải là lợi thế của SaaS so với các đám mây riêng?',
    options: ['Tốc độ triển khai', 'Hỗ trợ người ding', 'Chi phí triển khai và nâng cấp', 'Bảo mật'],
    correctAnswer: 3
  },
  {
    question: 'Câu 110: Các đám mây lai (Hybrid Cloud) phù hợp cho những đối tượng nào?',
    options: ['Tổ chức nhà nước', 'Cá nhân', 'Doanh nghiệp, cá nhân', 'Doanh nghiệp'],
    correctAnswer: 3
  },
  {
    question: 'Câu 111: Các dịch vụ theo mô hình Saas đóng góp phần nào trong đám mây lai – Hybird Cloud',
    options: ['Cung cấp giải pháp hệ thống', 'Tối ưu hoá quản lý phần cứng', 'Nền tảng hệ thống', 'Phần mềm ứng dụng trên đám mây'],
    correctAnswer: 3
  },
  {
    question: 'Câu 112: Phần mềm nào không thể triển khai trên đám mây theo mô hình SaaS',
    options: ['Phần mềm quản lý nhân sự', 'Phần mềm quản lý khách hàng', 'Phần mềm kế toán', 'Tất cả'],
    correctAnswer: 3
  },
  {
    question: 'Câu 113: Phần mềm dịch vụ (SaaS) có thể được ứng dụng cho những thiết bị nào?',
    options: ['Điện thoại', 'Máy tính', 'Ô tô', 'Tất cả các thiết bị có kết nối mạng, internet'],
    correctAnswer: 3
  },
  {
    question: 'Câu 114: Phần mềm Office365 của Microsoft tương thích với hệ điều hành nào?',
    options: ['Windows 8', 'Mac', 'Linux', 'Tất cả'],
    correctAnswer: 3
  },
  {
    question: 'Câu 115: Đâu là lợi thế khi sử dụng các phần mềm dịch vụ (SaaS)',
    options: [
      'Chi phí đầu tư rẻ, cần ít người quản lý',
      'Không mất chi phí đầu tư phần cứng, chỉ phải mua phần mềm cài đặt',
      'Được dùng miễn phí',
      'Không mất phí đầu tư hạ tầng và nhân sự quản lý'
    ],
    correctAnswer: 3
  },
  {
    question: 'Câu 116: Các phần mềm dịch vụ (SaaS) được cài đặt ở đâu khi sử dụng',
    options: ['Trên máy tính', 'Trên thiết bị di động', 'Thiết bị nào sử dụng đều phảI cài đặt phần mềm', 'Không cần cài đặt, nó được phân phối thông qua mạng'],
    correctAnswer: 3
  },
  {
    question: 'Câu 117: Bộ phần mềm Visual Studio Online của Microsoft ứng dụng công nghệ nào?',
    options: ['Máy chủ ảo hoá', 'Client – Server', 'Web 2.0', 'Điện toán đám mây'],
    correctAnswer: 3
  },
  {
    question: 'Câu 118: Khó khăn khi triển khai sử dụng SaaS ở các doanh nghiệp?',
    options: ['Hệ thống cũ đang hoạt động', 'An ninh thông tin', 'Thói quen người ding', 'Tất cả'],
    correctAnswer: 3
  },
  {
    question: 'Câu 119: Phần mềm dịch vụ SaaS là gì ?',
    options: [
      'Là phần mềm được đóng gói bán cho người dùng cài đặt tại máy tính',
      'Phần mềm được đóng gói để người dùng cài đặt tại máy chủ',
      'Phần mềm được cài đặt và chạy trên website',
      'Là phần mềm ứng dụng công nghệ điện toán đám mây'
    ],
    correctAnswer: 3
  },
  {
    question: 'Câu 120: Một trong số các hạn chế của SaaS là gì?',
    options: ['Hệ điều hành máy tính', 'Cấu hình xử lý của mấy tính', 'Hệ thống máy chủ', 'Kết nối mạng – Internet'],
    correctAnswer: 3
  },
  {
    question: 'Câu 121: Dịch vụ nào không phải là dịch vụ lưu trữ đám mây',
    options: ['Dropbox', 'SkyDrive', 'Google Drive', 'Office 365'],
    correctAnswer: 3
  },

   ],
   
   
    cnjava:[
         
  {
    question: '1) Lớp System.out dùng để ?',
    options: [
      'Hiển thị kết quả trên màn hình',
      'Xuất dữ liệu ra ngoài màn hình',
      'Đọc các ký tự dữ liệu',
      'Xuất các kí tự dữ liệu'
    ],
    correctAnswer: 0
  },
  {
    question: '2) Lớp System.in dùng để ?',
    options: [
      'Hiển thị kết quả trên màn hình',
      'Xuất dữ liệu ra ngoài màn hình',
      'Đọc các ký tự dữ liệu',
      'Xuất các kí tự dữ liệu'
    ],
    correctAnswer: 2
  },
  {
    question: '3) Lớp System.err là?',
    options: [
      'Hiển thị kết quả trên màn hình',
      'Xuất dữ liệu ra ngoài màn hình',
      'Đọc các ký tự dữ liệu',
      'Dòng lỗi chuẩn'
    ],
    correctAnswer: 3
  },
  {
    question: '4) Lớp System.err là?',
    options: [
      'Hiển thị kết quả trên màn hình',
      'Xuất dữ liệu ra ngoài màn hình',
      'Đọc các ký tự dữ liệu',
      'Tất cả đều sai'
    ],
    correctAnswer: 3
  },
  {
    question: '5) Lớp InputStream dùng để ?',
    options: [
      'Đọc và dùng các dòng dữ liệu để làm đầu vào.',
      'Tạo ra, ghi và xử lý kết xuất các dòng',
      'Đọc các ký tự dữ liệu',
      'Xuất các kí tự dữ liệu'
    ],
    correctAnswer: 0
  },
  {
    question: '6) Lớp OutputStream dùng để ?',
    options: [
      'Đọc và dùng các dòng dữ liệu để làm đầu vào.',
      'Tạo ra, ghi và xử lý kết xuất các dòng',
      'Đọc các ký tự dữ liệu',
      'Xuất các kí tự dữ liệu'
    ],
    correctAnswer: 1
  },
  {
    question: '7) Lớp InputStream dùng để ?',
    options: [
      'Đọc và dùng các dòng dữ liệu để làm đầu vào.',
      'Tạo ra, ghi và xử lý kết xuất các dòng',
      'Đọc các ký tự dữ liệu',
      'Xuất các kí tự dữ liệu'
    ],
    correctAnswer: 0
  },
  {
    question: '8) Phương thức read() dùng để ?',
    options: [
      'Đọc các byte dữ liệu từ một dòng. Nếu như không có byte dữ liệu nào, nó phải chờ. Khi một phương thức phải chờ, các luồng đang thực hiện phải tạm dừng cho đến khi có dữ liệu.',
      'Trả về số byte đọc được hay ‘-1’ nếu như đã đọc đến cuối dòng. Nó gây ra ngoại lệ IOException nếu có lỗi xảy ra.',
      'Phương thức này định vị lại dòng theo vị trí được đánh lần cuối cùng. Nó gây ra ngoại lệ IOException nếu lỗi xảy ra.',
      'Đánh dấu vị trí hiện tại của dòng'
    ],
    correctAnswer: 0
  },
  {
    question: '9) Phương thức read(byte[]) dùng để ?',
    options: [
      'Đọc các byte dữ liệu từ một dòng. Nếu như không có byte dữ liệu nào, nó phải chờ. Khi một phương thức phải chờ, các luồng đang thực hiện phải tạm dừng cho đến khi có dữ liệu.',
      'Trả về số byte đọc được hay ‘-1’ nếu như đã đọc đến cuối dòng. Nó gây ra ngoại lệ IOException nếu có lỗi xảy ra.',
      'Phương thức này định vị lại dòng theo vị trí được đánh lần cuối cùng. Nó gây ra ngoại lệ IOException nếu lỗi xảy ra.',
      'Đánh dấu vị trí hiện tại của dòng'
    ],
    correctAnswer: 1
  },
  {
    question: '10) Phương thức mark() dùng để ?',
    options: [
      'Đọc các byte dữ liệu từ một dòng. Nếu như không có byte dữ liệu nào, nó phải chờ. Khi một phương thức phải chờ, các luồng đang thực hiện phải tạm dừng cho đến khi có dữ liệu.',
      'Trả về số byte đọc được hay ‘-1’ nếu như đã đọc đến cuối dòng. Nó gây ra ngoại lệ IOException nếu có lỗi xảy ra.',
      'Phương thức này định vị lại dòng theo vị trí được đánh lần cuối cùng. Nó gây ra ngoại lệ IOException nếu lỗi xảy ra.',
      'Đánh dấu vị trí hiện tại của dòng'
    ],
    correctAnswer: 3
  },
  {
    question: '11) Phương thức read(byte[], int, int) dùng để ?',
    options: [
      'Đọc các byte dữ liệu từ một dòng. Nếu như không có byte dữ liệu nào, nó phải chờ. Khi một phương thức phải chờ, các luồng đang thực hiện phải tạm dừng cho đến khi có dữ liệu.',
      'Trả về số byte đọc được hay ‘-1’ nếu như đã đọc đến cuối dòng. Nó gây ra ngoại lệ IOException nếu có lỗi xảy ra.',
      'Phương thức này định vị lại dòng theo vị trí được đánh lần cuối cùng. Nó gây ra ngoại lệ IOException nếu lỗi xảy ra.',
      'Đánh dấu vị trí hiện tại của dòng'
    ],
    correctAnswer: 2
  },
  {
    question: '12) Phương thức available() dùng để ?',
    options: [
      'Đọc các byte dữ liệu từ một dòng. Nếu như không có byte dữ liệu nào, nó phải chờ. Khi một phương thức phải chờ, các luồng đang thực hiện phải tạm dừng cho đến khi có dữ liệu.',
      'Trả về số byte đọc được hay ‘-1’ nếu như đã đọc đến cuối dòng. Nó gây ra ngoại lệ IOException nếu có lỗi xảy ra.',
      'Phương pháp này trả về số lượng byte có thể đọc được mà không phải chờ. Nó trả về số byte hiện tại có trong dòng. Nó không phải là phương thức tin cậy để thực hiện tiến trình xử lý đầu vào.',
      'Đánh dấu vị trí hiện tại của dòng'
    ],
    correctAnswer: 2
  },
  {
    question: '13) Phương thức write(int) dùng để ?',
    options: [
      'Đọc các byte dữ liệu từ một dòng. Nếu như không có byte dữ liệu nào, nó phải chờ. Khi một phương thức phải chờ, các luồng đang thực hiện phải tạm dừng cho đến khi có dữ liệu.',
      'Phương thức này phong toả cho đến khi một byte được ghi. Dòng phải chờ cho đến khi tác vụ ghi hoàn tất. Nó gây ra ngoại lệ IOException nếu lỗi xảy ra.',
      'Phương pháp này trả về số lượng byte có thể đọc được mà không phải chờ. Nó trả về số byte hiện tại có trong dòng. Nó không phải là phương thức tin cậy để thực hiện tiến trình xử lý đầu vào.',
      'Phương thức này ghi một byte'
    ],
    correctAnswer: 3
  },
  {
    question: '14) Phương thức flush() dùng để ?',
    options: [
      'Đọc các byte dữ liệu từ một dòng. Nếu như không có byte dữ liệu nào, nó phải chờ. Khi một phương thức phải chờ, các luồng đang thực hiện phải tạm dừng cho đến khi có dữ liệu.',
      'Phương thức này xả sạch dòng. Đệm dữ liệu được ghi ra dòng. Nó kích hoạt IOException nếu lỗi xảy ra.',
      'Phương pháp này trả về số lượng byte có thể đọc được mà không phải chờ. Nó trả về số byte hiện tại có trong dòng. Nó không phải là phương thức tin cậy để thực hiện tiến trình xử lý đầu vào.',
      'Phương thức này ghi một byte'
    ],
    correctAnswer: 1
  },
  {
    question: '15) Phương thức close() dùng để ?',
    options: [
      'Đọc các byte dữ liệu từ một dòng. Nếu như không có byte dữ liệu nào, nó phải chờ. Khi một phương thức phải chờ, các luồng đang thực hiện phải tạm dừng cho đến khi có dữ liệu.',
      'Phương thức này xả sạch dòng. Đệm dữ liệu được ghi ra dòng. Nó kích hoạt IOException nếu lỗi xảy ra.',
      'Phương thức đóng dòng. Nó được dùng để giải phóng mọi tài nguyên gắn với dòng. Nó kích hoạt IOException nếu lỗi xảy ra.',
      'Phương thức này ghi một byte'
    ],
    correctAnswer: 2
  },
  {
    question: '16) Thư viện hsqldb.jar dùng để làm gì?',
    options: [
      'Hỗ trợ tạo bảng và truy vấn trong Java, sử dụng CSDL hsqldb.',
      'Hỗ trợ giao diện đồ họa trong Java',
      'Hỗ trợ quản lý người dùng',
      'Hỗ trợ đọc/ghi tệp văn bản'
    ],
    correctAnswer: 0
  },
  {
    question: '17) Đối tượng java.sql.Connection được khởi tạo từ câu lệnh nào?',
    options: [
      'DriverManager.getConnection()',
      'createStatement()',
      'executeUpdate()',
      'executeQuery()'
    ],
    correctAnswer: 0
  },
  {
    question: '18) Đối tượng java.sql.DriverManager có phương thức nào?',
    options: ['getConnection()', 'getHSQLConnection()', 'createStatement()', 'executeUpdate()'],
    correctAnswer: 0
  },
  {
    question: '19) Đối tượng java.sql.ResultSet được trả về từ phương thức nào sau đây?',
    options: ['executeQuery();', 'getHSQLConnection()', 'createStatement()', 'getConnection()'],
    correctAnswer: 0
  },
  {
    question: '20) Đối tượng java.sql.ResultSetMetaData được trả về từ phương thức nào sau đây?',
    options: ['getMetaDa()', 'getHSQLConnection()', 'createStatement()', 'executeUpdate()'],
    correctAnswer: 0
  },
  {
    question:
      '21) Đối tượng java.sql.ResultSetMetaData có thuộc tính ColumnCount, thuộc tính này có thể xác định bằng hàm nào?',
    options: ['getColumnCount()', 'getColumnsCount()', 'getColumnCountIndex()', 'getColumnIndex()'],
    correctAnswer: 0
  },
  {
    question: '22) Để đóng một Connection chúng ta dùng phương thức:',
    options: ['close()', 'finish()', 'quit()', 'exit()'],
    correctAnswer: 0
  },
  {
    question: '23) Để đóng một Statement chúng ta dùng phương thức:',
    options: ['close()', 'finish()', 'quit()', 'exit()'],
    correctAnswer: 0
  },
  {
    question: '24) Để đóng một ResultSet chúng ta dùng phương thức:',
    options: ['close()', 'finish()', 'quit()', 'exit()'],
    correctAnswer: 0
  },
  {
    question: '25) Để đăng ký sử dụng thư viện hsqldb chúng ta dùng câu lệnh nào?',
    options: [
      'Class.forName("org.hsqldb.jdbcDriver")',
      'getHSQLConnection()',
      'createStatement()',
      'executeUpdate()'
    ],
    correctAnswer: 0
  },
  {
    question: '26) Java kết nối dữ liệu với Oracle cần dùng tới thư viện gì?',
    options: ['OJDBC14.jar', 'Hsqldb.jar', 'Không cần thư viện ngoài', 'Thư viện thsoft.jar'],
    correctAnswer: 0
  },
  {
    question: '27) Để đăng ký sử dụng thư viện OJDBC chúng ta dùng câu lệnh nào?',
    options: [
      'Class.forName("oracle.jdbc.driver.OracleDriver")',
      'getHSQLConnection()',
      'createStatement()',
      'executeUpdate()'
    ],
    correctAnswer: 0
  },
  {
    question: '28) Để cập nhật dữ liệu vào bảng ta dùng câu lệnh nào?',
    options: ['executeUpdate();', 'executeQuery();', 'getHSQLConnection()', 'createStatement()'],
    correctAnswer: 0
  },
  {
    question: '29) Để tạo 1 bảng mới ta dùng lệnh nào?',
    options: [
      'executeUpdate("create table survey (id int, name CHAR(5) ); ");',
      'executeQuery("create table survey");',
      'getHSQLConnection()',
      'createStatement()'
    ],
    correctAnswer: 0
  },
  {
    question: '30) Câu lệnh nào sau đây viết đúng cú pháp?',
    options: [
      'executeUpdate("create table survey (id int, name CHAR(5) );");',
      'executeUpdate("table survey (id int, name CHAR(5) ); ");',
      'executeUpdate("create table (id int, name CHAR(5) ); ");',
      'executeUpdate("create table name survey (id int, name CHAR(5) );");'
    ],
    correctAnswer: 3
  },
  {
    question: '31) 2D API là gì ?',
    options: [
      'Chứa các lớp hiện thực nhiều kiểu vẽ, các hình phức tạp, fonts, color. 2D API không phải là một phần của Swing.',
      'Là bộ công cụ giúp người dùng kết nối với các thiết bị như bàn phím, bộ đọc chữ tự động… cho phép truy xuất trực tiếp tới các thành phần Swing.',
      'Chứa các lớp hiện thực nhiều kiểu vẽ, các hình phức tạp, fonts, color. 2D API là một phần của Swing.',
      'Không có đáp án đúng'
    ],
    correctAnswer: 0
  },
  {
    question: '32) Trong kiến trúc MVC của Swing, thành phần có ghi giá trị như sau Minimum = 0. Vậy thành phần đó thuộc loại nào?',
    options: ['Model', 'View', 'Controller', 'Không có đáp án đúng'],
    correctAnswer: 0
  },
  {
    question: '33) Trong kiến trúc MVC của Swing, thành phần có ghi giá trị như sau Accept mouse clicks on end buttons. Vậy thành phần đó thuộc loại nào?',
    options: ['Controller', 'View', 'Model', 'Không có đáp án đúng'],
    correctAnswer: 0
  },
  {
    question: '34) Phát biểu đúng nhất về đối tượng Panel và ScrollPanes.',
    options: [
      'Đây là hai thành phần thuộc Container. Rất giống nhau, khác nhau ở điểm ScrollPanes có thêm hai thanh trượt.',
      'Đây là hai thành phần thuộc Container. Giống nhau hoàn toàn, đều có thêm hai thanh trượt.',
      'Đây là hai thành phần thuộc Component. Không giống nhau.',
      'Không có đáp án đúng.'
    ],
    correctAnswer: 0
  },
  {
    question: '35) Dialogs là đối tượng gì?',
    options: [
      'Là một cửa sổ dạng hộp thoại, dùng để đưa ra các thông báo, lấy dữ liệu nhập từ người dùng.',
      'Là hộp chứa, chuyên dùng để chứa mọi thành phần trong java.',
      'Là hộp dùng để kết nối cơ sở dữ liệu bên ngoài, rồi hiển thị.',
      'Không có đáp án đúng.'
    ],
    correctAnswer: 0
  },
  {
    question: '36) Phương thức mouseClicked(MouseEvent event) có được từ giao tiếp lắng nghe nào?',
    options: ['MouseListener', 'MouseMotionListener', 'MouseEvent', 'Không có đáp án đúng'],
    correctAnswer: 0
  },
  {
    question: '37) Phương thức mousePressed(MouseEvent event) có được từ giao tiếp lắng nghe nào?',
    options: ['MouseListener', 'MouseMotionListener', 'MouseEvent', 'Không có đáp án đúng'],
    correctAnswer: 0
  },
  {
    question: '38) Phương thức mouseDragged(MouseEvent event) có được từ giao tiếp lắng nghe nào?',
    options: ['MouseMotionListener', 'MouseListener', 'MouseEvent', 'Không có đáp án đúng'],
    correctAnswer: 0
  },
  {
    question: '39) Phương thức mouseMoved(MouseEvent event) có được từ giao tiếp lắng nghe nào?',
    options: ['MouseMotionListener', 'MouseListener', 'MouseEvent', 'Không có đáp án đúng'],
    correctAnswer: 0
  },
  {
    question: '40) Phương thức mouseMoved(MouseEvent event) có được từ giao tiếp lắng nghe nào?',
    options: ['MouseMotionListener', 'MouseListener', 'MouseEvent', 'Không có đáp án đúng'],
    correctAnswer: 0
  },
  {
    question: '41) Trong giao tiếp, xử lý sự kiện phím KeyListener. Hàm keyPressed là sự kiện gì?',
    options: ['Khi nhấn phím bất kỳ', 'Khi thả phím bất kỳ', 'Xác định kiểu phím nhấn', 'Không có đáp án đúng'],
    correctAnswer: 0
  },
  {
    question: '42) Trong giao tiếp, xử lý sự kiện phím KeyListener. Hàm keyReleased là sự kiện gì?',
    options: ['Khi thả phím bất kỳ', 'Khi nhấn phím bất kỳ', 'Xác định kiểu phím nhấn', 'Không có đáp án đúng'],
    correctAnswer: 0
  },
  {
    question: '43) Có REM câu lệnh sau: Image img = kit.getImage("hand.jpg"); Hỏi bức ảnh hand.jpg được lưu ở đâu?',
    options: [
      'Được đặt trong thư mục dự án đang viết code.',
      'Được lưu ngoài desktop.',
      'Được lưu tại bất kỳ dự án nào về Java.',
      'Cú pháp viết REM câu lệnh sai.'
    ],
    correctAnswer: 0
  },
  {
    question: '44) Kiến trúc MVC của Swing chia mỗi thành phần giao diện thành mấy phần?',
    options: ['1', '2', '3', '4'],
    correctAnswer: 2
  },
  {
    question: '45) JFC (Java Foundation Classes) gồm?',
    options: [
      'Swing, AWT, Accessibility API, 2D API, Drag and Drop',
      'Swing, AWT, Accessibility API, 2D ACI',
      'Swing, AWT, Accessibility API, 2D ACI, Drag and Drop',
      'Swing, AWT, Accessibility AGI, 2D API, Drag and Drop'
    ],
    correctAnswer: 0
  },
  {
    question: '1) Trong các phương thức sau phương thức nào thuộc Lớp OutputStream :',
    options: ['flush()', 'mark()', 'reset()', 'skip()'],
    correctAnswer: 0
  },
  {
    question: '2) Trong các phương thức sau phương thức nào thuộc Lớp OutputStream :',
    options: ['write(byte[])', 'mark()', 'reset()', 'skip()'],
    correctAnswer: 0
  },
  {
    question: '3) Trong các phương thức sau phương thức nào thuộc Lớp InputStream :',
    options: ['Write(byte[])', 'Write(int)', 'Flush()', 'Read()'],
    correctAnswer: 3
  },
  {
    question: '4) Trong các phương thức sau phương thức nào thuộc Lớp InputStream :',
    options: ['Write(byte[])', 'Write(int)', 'Flush()', 'Mark()'],
    correctAnswer: 3
  },
  {
    question: '5) Lớp FileDescriptor :',
    options: [
      'Cung cấp khả năng truy cập các mô tả tập tin mà hệ điều hành sử dụng khi tập tin và thư mục đang được truy cập.',
      'Lớp này cho phép đọc vào từ một tập tin dưới dạng một dòng.',
      'Lớp này cho phép xuất ra một tập tin theo dòng.',
      'Lớp này cho phép đọc và xuất ra một tập tin theo dòng.'
    ],
    correctAnswer: 0
  },
  {
    question: '6) Lớp FileInputStream :',
    options: [
      'Cung cấp khả năng truy cập các mô tả tập tin mà hệ điều hành sử dụng khi tập tin và thư mục đang được truy cập.',
      'Lớp này cho phép đọc vào từ một tập tin dưới dạng một dòng.',
      'Lớp này cho phép xuất ra một tập tin theo dòng.',
      'Lớp này cho phép đọc và xuất ra một tập tin theo dòng.'
    ],
    correctAnswer: 1
  },
  {
    question: '7) Lớp FileOutputStream :',
    options: [
      'Cung cấp khả năng truy cập các mô tả tập tin mà hệ điều hành sử dụng khi tập tin và thư mục đang được truy cập.',
      'Lớp này cho phép đọc vào từ một tập tin dưới dạng một dòng.',
      'Lớp này cho phép xuất ra một tập tin theo dòng.',
      'Lớp này cho phép đọc và xuất ra một tập tin theo dòng.'
    ],
    correctAnswer: 1
  },
  {
    question: '8) Phương thức finalize() được dùng để:',
    options: [
      'Đóng dòng khi nó được bộ gom rác Java nhặt.',
      'Lớp này cho phép đọc vào từ một tập tin dưới dạng một dòng.',
      'Trả về đối tượng FileDescriptor chứa thông tin về sự kết nối thực sự tới file mà FileInputStream đang sử dụng.',
      'Lớp này cho phép đọc và xuất ra một tập tin theo dòng.'
    ],
    correctAnswer: 0
  },
  {
    question: '9) Phương thức getFD() được dùng để:',
    options: [
      'Đóng dòng khi nó được bộ gom rác Java nhặt.',
      'Lớp này cho phép đọc vào từ một tập tin dưới dạng một dòng.',
      'Trả về đối tượng FileDescriptor chứa thông tin về sự kết nối thực sự tới file mà FileInputStream đang sử dụng.',
      'Lớp này cho phép đọc và xuất ra một tập tin theo dòng.'
    ],
    correctAnswer: 2
  },
  {
    question: '10) Phương thức finalize() và getFD() :',
    options: [
      'Được sử dụng ở lớp FileOutputStream.',
      'Được sử dụng ở lớp FileInputStream.',
      'Cả 2 lớp trên.',
      'Tất cả đều sai.'
    ],
    correctAnswer: 2
  },
  {
    question: '11) Lớp BufferedInputStream dùng để :',
    options: [
      'Cung cấp khả năng truy cập các mô tả tập tin mà hệ điều hành sử dụng khi tập tin và thư mục đang được truy cập.',
      'Lớp này tự động tạo ra và duy trì vùng đệm để hỗ trợ thao tác vào.',
      'Lớp này cho phép xuất ra một tập tin theo dòng.',
      'Lớp này cho phép đọc và xuất ra một tập tin theo dòng.'
    ],
    correctAnswer: 1
  },
  {
    question: '12) Lớp BufferedOutputStream dùng để :',
    options: [
      'Lớp này cũng định nghĩa hai phương thức thiết lập, một cho phép chỉ định kích cỡ của vùng đệm xuất, một sử dụng kích cỡ vùng đệm ngầm định.',
      'Lớp này tự động tạo ra và duy trì vùng đệm để hỗ trợ thao tác vào.',
      'Lớp này cho phép xuất ra một tập tin theo dòng.',
      'Lớp này cho phép đọc và xuất ra một tập tin theo dòng.'
    ],
    correctAnswer: 0
  },
  {
    question: '13) Phương thức reset() được dùng để:',
    options: [
      'Thiết lập lại vùng đệm.',
      'Trả về kích cỡ hiện hành của vùng đệm.',
      'Trả về bản sao mảng ký tự của vùng đệm xuất.',
      'Chuyển đổi vùng đệm xuất thành một đối tượng String.'
    ],
    correctAnswer: 0
  },
  {
    question: '14) Phương thức size() được dùng để:',
    options: [
      'Thiết lập lại vùng đệm.',
      'Trả về kích cỡ hiện hành của vùng đệm.',
      'Trả về bản sao mảng ký tự của vùng đệm xuất.',
      'Chuyển đổi vùng đệm xuất thành một đối tượng String.'
    ],
    correctAnswer: 1
  },
  {
    question: '15) Phương thức toCharArray() được dùng để:',
    options: [
      'Thiết lập lại vùng đệm.',
      'Trả về kích cỡ hiện hành của vùng đệm.',
      'Trả về bản sao mảng ký tự của vùng đệm xuất.',
      'Chuyển đổi vùng đệm xuất thành một đối tượng String.'
    ],
    correctAnswer: 2
  },
  {
    question: '16) Phương thức toString() được dùng để:',
    options: [
      'Thiết lập lại vùng đệm.',
      'Trả về kích cỡ hiện hành của vùng đệm.',
      'Trả về bản sao mảng ký tự của vùng đệm xuất.',
      'Chuyển đổi vùng đệm xuất thành một đối tượng String.'
    ],
    correctAnswer: 3
  },
  {
    question: '17) Phương thức writeTo() được dùng để:',
    options: [
      'Thiết lập lại vùng đệm.',
      'Trả về kích cỡ hiện hành của vùng đệm.',
      'Trả về bản sao mảng ký tự của vùng đệm xuất.',
      'Ghi vùng đệm ra một luồng xuất khác.'
    ],
    correctAnswer: 3
  },
  {
    question: '18) Phương thức getBuffer() được dùng để:',
    options: [
      'Thiết lập lại vùng đệm.',
      'Trả về đối tượng StringBuffer tương ứng với vùng đệm xuất.',
      'Trả về bản sao mảng ký tự của vùng đệm xuất.',
      'Ghi vùng đệm ra một luồng xuất khác.'
    ],
    correctAnswer: 1
  },
  {
    question: '19) Phương thức toString() được dùng để:',
    options: [
      'Thiết lập lại vùng đệm.',
      'Trả về đối tượng StringBuffer tương ứng với vùng đệm xuất.',
      'Trả về bản sao mảng ký tự của vùng đệm xuất.',
      'Trả về một chuỗi chứa bản sao của vùng đệm xuất.'
    ],
    correctAnswer: 3
  },
  {
    question: '20) Phương thức byte readByte() là :',
    options: ['Đọc một byte.', 'Đọc và trả về một giá trị ký tự.', 'Đọc 2 byte và trả về giá trị kiểu short.', 'Đọc 8 byte và trả về giá trị kiểu long.'],
    correctAnswer: 0
  },
  {
    question: '21) Phương thức long readLong() là :',
    options: ['Đọc một byte.', 'Đọc và trả về một giá trị ký tự.', 'Đọc 2 byte và trả về giá trị kiểu short.', 'Đọc 8 byte và trả về giá trị kiểu long.'],
    correctAnswer: 3
  },
  {
    question: '22) Phương thức short readShort() là :',
    options: ['Đọc một byte.', 'Đọc và trả về một giá trị ký tự.', 'Đọc 2 byte và trả về giá trị kiểu short.', 'Đọc 8 byte và trả về giá trị kiểu long.'],
    correctAnswer: 2
  },
  {
    question: '23) Phương thức char readChar() là :',
    options: ['Đọc một byte.', 'Đọc và trả về một giá trị ký tự.', 'Đọc 2 byte và trả về giá trị kiểu short.', 'Đọc 8 byte và trả về giá trị kiểu long.'],
    correctAnswer: 1
  },
  {
    question: '24) Phương thức String readUTF() là :',
    options: ['Đọc một byte.', 'Đọc một chuỗi.', 'Đọc 2 byte và trả về giá trị kiểu short.', 'Đọc 8 byte và trả về giá trị kiểu long.'],
    correctAnswer: 1
  },
  {
    question: '25) Câu lệnh nào sau đây viết đúng cú pháp?',
    options: [
      'executeQuery("SELECT * FROM survey");',
      'executeQuery("SELECTED * FROM survey");',
      'executeQuery("SELECT * FROM tablesurvey");',
      'executeQuery("SELECT servey FROM survey");'
    ],
    correctAnswer: 0
  },
  {
    question: '26) Câu lệnh nào sau đây viết đúng cú pháp',
    options: [
      "executeUpdate(\"INSERT INTO survey(id, name) VALUES(111, '123456789')\");",
      "executeUpdate(\"INSERT INTO table survey(id, name) VALUES(111, '123456789')\");",
      "executeUpdate(\"INSERTED INTO survey(id, name) VALUES(111, '123456789')\");",
      "executeUpdate(\"INSERTING INTO survey(id, name) VALUES(111, '123456789')\");"
    ],
    correctAnswer: 0
  },
  {
    question: '27) Câu lệnh nào sau đây viết đúng cú pháp xóa bảng',
    options: ['executeUpdate("drop table survey");', 'executeUpdate("drop survey");', 'executeUpdate("drop * table survey");', 'executeUpdate("drop all table survey");'],
    correctAnswer: 0
  },
  {
    question: '28) Câu lệnh nào sau đây viết đúng cú pháp:',
    options: ['executeQuery("SELECT * FROM survey");', 'executeQuery("SELECT all FROM survey");', 'executeQuery("SELECT table FROM survey");', 'executeQuery("SELECTED FROM survey");'],
    correctAnswer: 0
  },
  {
    question: '29) Chuyển tới bản ghi tiếp theo trong ResultSet chúng ta dùng thủ tục nào?',
    options: ['next()', 'nextTo()', 'continue()', 'continueTo()'],
    correctAnswer: 0
  },
  {
    question: '30) Câu lệnh nào sau đây viết đúng cú pháp:',
    options: ['executeUpdate("delete from survey");', 'executeUpdate("delete * from survey");', 'executeUpdate("delete all from survey");', 'executeUpdate("deleted from survey");'],
    correctAnswer: 0
  },
  {
    question: '31) Câu lệnh nào sau đây viết đúng cú pháp xóa dữ liệu trong bảng:',
    options: ['executeUpdate("delete from survey");', 'executeUpdate("delete table from survey");', 'executeUpdate("delete col from survey");', 'executeUpdate("delete from survey at line 5");'],
    correctAnswer: 1
  },
  {
    question: '32) Câu lệnh DriverManager.getConnection(url, "sa", "") có 3 tham số gồm url, user name và:',
    options: ['Password', 'Tài khoản', 'Tên file', 'Tên bảng'],
    correctAnswer: 0
  },
  {
    question: '33) Câu lệnh DriverManager.getConnection(url, "sa", "") có 3 tham số gồm password, user name và:',
    options: ['Url', 'Tài khoản', 'Tên file', 'Tên bảng'],
    correctAnswer: 0
  },
  {
    question: '34) Câu lệnh DriverManager.getConnection(url, "sa", "") có 3 tham số gồm password, url và:',
    options: ['UserName', 'Tài khoản', 'Tên file', 'Tên bảng'],
    correctAnswer: 0
  },
  {
    question: '35) Đối tượng ResultSet không có phương thức nào sau đây?',
    options: ['getNextItem();', 'executeUpdate()', 'executeQuery()', 'close()'],
    correctAnswer: 0
  },
  {
    question: '36) Đối tượng ResultSet không có phương thức nào sau đây?',
    options: ['getRecord();', 'executeUpdate()', 'executeQuery()', 'next()'],
    correctAnswer: 0
  },
  {
    question: '37) Đối tượng ResultSet không có phương thức nào sau đây?',
    options: ['getDataView();', 'executeUpdate()', 'executeQuery()', 'next()'],
    correctAnswer: 0
  },
  {
    question: '38) Phương thức next của đối tượng ResultSet trả về giá trị gì?',
    options: ['Boolean', 'Int', 'Double', 'Float'],
    correctAnswer: 0
  },
  {
    question: '39) Phương thức getColumnCount() của đối tượng ResultSetMetaData trả về giá trị kiểu gì?',
    options: ['Int', 'Boolean', 'Double', 'String'],
    correctAnswer: 0
  },
  {
    question: '40) Câu lệnh nào sau đây viết sai cú pháp',
    options: [
      'executeUpdate("create survey (id int, name CHAR(5) );");',
      'executeUpdate("create table survey (id int, name CHAR(5) );");',
      'executeUpdate("create table persion (id int, name CHAR(5) );");',
      'executeUpdate("create table taxi (id int, name CHAR(5) );");'
    ],
    correctAnswer: 0
  },
  {
    question: '41) Câu lệnh nào sau đây viết sai cú pháp:',
    options: ['executeUpdate("delete all from survey");', 'executeUpdate("delete from driver");', 'executeUpdate("delete from survey");', 'executeUpdate("delete from taxi");'],
    correctAnswer: 0
  },
  {
    question: '42) Câu lệnh nào sau đây viết sai cú pháp',
    options: ['executeQuery("SELECT all FROM survey");', 'executeQuery("SELECT * FROM survey");', 'executeQuery("SELECT * FROM computers");', 'executeQuery("SELECT * FROM taxi");'],
    correctAnswer: 0
  },
  {
    question: '43) Câu lệnh nào sau đây viết sai cú pháp?',
    options: ['executeUpdate("drop table name survey");', 'executeUpdate("drop table survey");', 'executeUpdate("drop table taxi");', 'executeUpdate("drop table computers");'],
    correctAnswer: 0
  },
  {
    question: '44) Đối tượng Statement được trả về từ hàm nào?',
    options: ['createStatement();', 'executeUpdate("drop table survey");', 'executeUpdate("drop table taxi");', 'executeUpdate("drop table computers");'],
    correctAnswer: 0
  },
  {
    question: '45) Đối tượng ResultSet có hàm nào sau đây:',
    options: ['getString()', 'getStr()', 'getStrings()', 'getValues()'],
    correctAnswer: 0
  },
  {
    question: '46) Đối tượng ResultSet có hàm nào sau đây:',
    options: ['updateString()', 'updateStr()', 'updateStrings()', 'updateValues()'],
    correctAnswer: 0
  },
  {
    question: '47) Đối tượng ResultSet có hàm nào sau đây:',
    options: ['updateRow()', 'updateRows()', 'updateInts()', 'updateValues()'],
    correctAnswer: 0
  },
  {
    question: '48) Điền thêm từ vào … để hoàn thành: UIManager.setLookAnd…(UIManager.getSystemLookAndFeelClassName());',
    options: ['Feel', 'Show', 'Look', 'Không có đáp án đúng'],
    correctAnswer: 0
  },
  {
    question: '49) Điền thêm từ vào … để hoàn thành: UIManager.get…LookAndFeelClassName()',
    options: ['System', 'Show', 'Container', 'Component'],
    correctAnswer: 0
  },
  {
    question: '50) Điền thêm từ vào … để hoàn thành: … (Exception e) { e.printStackTrace(); }',
    options: ['catch', 'and', 'CATCH', 'And'],
    correctAnswer: 0
  },

  {
    question: '51) Điền thêm từ vào … để hoàn thành: catch (… e) { e.printStackTrace(); }',
    options: ['Exception', 'EXCEPTION', 'except', 'Except'],
    correctAnswer: 0
  },
  {
    question: '52) Điền thêm từ vào …: addMouse…Listener(new MouseMotionAdapter(){ … })',
    options: ['Motion', 'event', 'Point', 'Adapter'],
    correctAnswer: 0
  },
  {
    question: '53) Điền thêm từ vào …: addMouseMotionListener(new MouseMotion…(){ … })',
    options: ['Adapter', 'Event', 'Dragged', 'Không có đáp án đúng'],
    correctAnswer: 0
  },
  {
    question: '54) Điền thêm từ vào …: public void …Dragged(MouseEvent event) { … }',
    options: ['mouse', 'event', 'repaint', 'getPoint'],
    correctAnswer: 0
  },
  {
    question: '55) Kiến trúc MVC của Swing gồm có những thành phần nào?',
    options: ['Model, View, Controller', 'Model, View, Controller, Connection', 'Model, View, Console', 'Model, View, Connection'],
    correctAnswer: 0
  },
  {
    question: '56) Trong Java, AWT viết là gì?',
    options: ['Abstract Window Toolkit', 'All Window Toolkit', 'Add Window Toolkit', 'Tất cả đều sai.'],
    correctAnswer: 0
  },
  {
    question: '57) Trong Java, Container là gì?',
    options: ['Đối tượng vật chứa, có khả năng quản lý và nhóm các đối tượng khác lại', 'Đối tượng thành phần hiển thị, nằm trong đối tượng chứa', 'Đối tượng độc lập, được xây dựng riêng', 'Đối tượng quản lý bố cục'],
    correctAnswer: 0
  },
  {
    question: '58) Trong Java, Component là gì?',
    options: [
      'Là các đối tượng có biểu diễn đồ họa, được hiển thị lên màn hình mà người dùng tương tác được',
      'Là các đối tượng có biểu diễn đồ họa, được hiển thị lên màn hình mà người dùng không tương tác được',
      'Là đối tượng chứa, dùng để chứa các Container, quản lý bố cục',
      'Là đối tượng chuyên quản lý bố cục'
    ],
    correctAnswer: 0
  },
  {
    question: '59) Lệnh frame.pack() để làm gì?',
    options: [
      'Hiển thị frame với đủ các thành phần, kích thước nhỏ nhất',
      'Hiển thị frame toàn màn hình',
      'Cố định frame ở một chỗ',
      'Tất cả đều sai'
    ],
    correctAnswer: 0
  },
  {
    question: '60) Menu, Label, Button, Textbox…. là thuộc loại nào?',
    options: ['Component', 'Container', 'Layout manager', 'Event'],
    correctAnswer: 0
  },
  {
    question: '61) Những thành phần nào sau chỉ thuộc Container?',
    options: ['Dialog, Frame, Applet, Panel, Scroll pane', 'Frame, Applet, Panel, Scroll pane, Slider, List', 'Combo Box, List, Menu', 'Không có đáp án đúng'],
    correctAnswer: 0
  },
  {
    question: '62) Đồ họa trong Java, thành phần nào dùng để quản lý bố cục?',
    options: ['Layout manager', 'Graphic', 'Font', 'Container'],
    correctAnswer: 0
  },
  {
    question: '63) Đồ họa trong Java, thành phần nào dùng để xử lý sự kiện?',
    options: ['Event', 'Component', 'Container', 'Graphic'],
    correctAnswer: 0
  },
  {
    question: '64) Một số loại Layout có trong Java?',
    options: [
      'BorderLayout, BoxLayuot, CardLayout, FlowLayout, GridLayout',
      'BorderLayout, BoxLayuot, CardLayout, FlowLayout, PrintsLayout',
      'BorderLayout, BoxLayuot, PrintsLayout, ScannerLayout',
      'BorderLayout, BoxLayuot, CardLayout, FlowLayout, BagfwLayout'
    ],
    correctAnswer: 0
  },
  {
    question: '65) BorderLayout hoạt động thế nào?',
    options: ['Chia thành 5 phần: north, west, center, east, south', 'Đưa các thành phần từ trái qua phải, từ trên xuống dưới', 'Đưa các thành phần từ phải qua trái, từ trên xuống dưới', 'Đưa các thành phần vào từng dòng hoặc từng cột'],
    correctAnswer: 0
  },
  {
    question: '66) BoxLayout hoạt động thế nào?',
    options: ['Đưa các thành phần vào thành từng dòng hoặc từng cột', 'Đưa các thành phần từ phải qua trái, từ trên xuống dưới', 'Đưa các thành phần từ trái qua phải, từ trên xuống dưới', 'Chia thành 5 phần : north, west, center, east, south'],
    correctAnswer: 0
  },
  {
    question: '67) CardLayout hoạt động thế nào?',
    options: [
      'Cho phép hiển thị nhiều Component khác nhau tại nhiều thời điểm khác nhau',
      'Đưa các thành phần từ phải qua trái, từ trên xuống dưới',
      'Đưa các thành phần từ trái qua phải, từ trên xuống dưới',
      'Chia thành 5 phần : north, west, center, east, south'
    ],
    correctAnswer: 0
  },
  {
    question: '68) FlowLayout hoạt động thế nào?',
    options: ['Đưa các thành phần từ trái qua phải', 'Đưa các thành phần từ phải qua trái, từ trên xuống dưới', 'Đưa các thành phần vào thành từng dòng hoặc từng cột', 'Chia thành 5 phần : north, west, center, east, south'],
    correctAnswer: 0
  },
  {
    question: '69) GridLayout hoạt động thế nào?',
    options: ['Đưa các thành phần từ trái qua phải, từ trên xuống dưới vào các ô định sẵn', 'Đưa các thành phần từ phải qua trái, từ trên xuống dưới', 'Đưa các thành phần vào thành từng dòng hoặc từng cột', 'Chia thành 5 phần : north, west, center, east, south'],
    correctAnswer: 0
  },
  {
    question: '70) Cách khai báo (import) gói sự kiện nào sau đây đúng?',
    options: ['java.awt.event.*, java.swing.event.*', 'java.awt.event.*, java.event.*', 'java.awt.event, java.swing.event', 'java.awt.even.*, java.swing.even.*'],
    correctAnswer: 0
  },
  {
    question: '71) Câu lệnh Java nào đúng?',
    options: [
      'statusBar = new JLabel(); getContentPane().add(statusBar, BorderLayout.SOUTH);',
      'statusBar = new JLabel(); getContenPanel().add(statusBar, BorderLayout.SOUTH);',
      'statusBar = new JLabel(); getContentPanel().add(statusBar, BordLayout.SOUTH);',
      'statusBar = new JLabel(); getContentPane().add(statusBar, BorderLayout.IN);'
    ],
    correctAnswer: 0
  },
  {
    question: '72) Lệnh getContentPane().setBackground(Color.RED); để làm gì?',
    options: ['Đặt màu nền của đối tượng thành màu đỏ', 'Lấy màu đỏ từ thành phần', 'Đặt màu đỏ làm mặc định cho cả chương trình', 'Không có đáp án đúng'],
    correctAnswer: 0
  },
  {
    question: '73) Dòng lệnh nào sau đây đúng cú pháp?',
    options: [
      'public class xlsk extends JFrame implements MouseMotionListener, MouseListener',
      'public class xlsk extend JFrame implements MouseMotionListener, MouseListener',
      'public class xlsk extends JFrame implements MouseMotionListener; MouseListener',
      'public xlsk extends JFrame implements MouseMotionListener, MouseListener'
    ],
    correctAnswer: 2
  },
  {
    question: '74) Lệnh repaint(); dùng để làm gì?',
    options: [
      'Gọi đến hàm public void paint(Graphics g) {} để xử lý',
      'Gọi đến hàm repaint. Hàm này buộc phải xây dựng chương trình chạy',
      'Không có lệnh này trong Java',
      'Không có đáp án đúng'
    ],
    correctAnswer: 0
  },
  {
    question: '75) Lệnh đặt chiều dài, chiều rộng (x,y) cho đối tượng là gì?',
    options: ['setSize(x,y)', 'SetSize(x,y)', 'GetSize(x,y)', 'getSize(x,y)'],
    correctAnswer: 0
  },
  {
    question: '76) Lệnh hiển thị một đối tượng kiểu JFrame là?',
    options: ['setVisible(true);', 'setEnabled(false);', 'setEnabled(true);'],
    correctAnswer: 0
  },
  {
    question: '77) Chức năng của JScrollPane là?',
    options: ['Giúp hiển thị các component với kích thước động', 'Giúp hiển thị các component với kích thước tĩnh', 'Là thành phần chứa container, chứa tất cả các thành phần khác', 'Không có đáp án đúng'],
    correctAnswer: 0
  },
  {
    question: '78) Chức năng của JSplitPane là gì?',
    options: ['Chia các component ra làm 2 phần, theo chiều ngang hoặc dọc', 'Chia các component ra làm 2 phần, theo chiều ngang', 'Chia các component ra làm 2 phần, theo chiều dọc', 'Chia các component ra nhiều phần, chỉ theo chiều ngang'],
    correctAnswer: 0
  },
  {
    question: '79) Các JRadioButton cùng thuộc một ButtonGroup thì?',
    options: [
      'Tại một thời điểm chỉ có một cái được chọn (setSelected(true))',
      'Tại một thời điểm có thể nhiều cái được chọn',
      'Có thể chọn hết hoặc không chọn',
      'Không có đáp án đúng'
    ],
    correctAnswer: 0
  },
  {
    question: '80) B là JButton. Lệnh B.setEnabled(false) để làm gì?',
    options: ['Vô hiệu hóa nút B (nhìn thấy nhưng không tương tác)', 'Ẩn nút B', 'Thay đổi màu nút B nhưng vẫn tác động được', 'Không có đáp án đúng'],
    correctAnswer: 0
  },
  {
    question: '81) JTextField và JPasswordField giống/khác nhau?',
    options: [
      'Cùng là ô nhập dữ liệu, nhưng JTextField hiển thị rõ, JPasswordField không',
      'Không có sự phân biệt',
      'Khác nhau hoàn toàn',
      'Cùng tạo ô nhập nhưng khác màu sắc'
    ],
    correctAnswer: 0
  },
  {
    question: '82) Phương thức hasNextLine() trong lớp Scanner có tác dụng?',
    options: [
      'Lớp Scanner không có phương thức này',
      'Kiểm tra có chuỗi trong input (không kể dấu cách)',
      'Kiểm tra có số nguyên trong input',
      'Kiểm tra có chuỗi trong input (kể cả dấu cách)'
    ],
    correctAnswer: 0
  },
  {
    question: '83) Cài đặt lại Locale mặc định cho hệ thống dùng phương thức nào?',
    options: ['static void setDefault(Locale loc)', 'static Locale getDefault()', 'String getDisplayName()', 'String getDisplayName(Locale loc)'],
    correctAnswer: 0
  },
  {
    question: '84) Lấy tên mô tả của một Locale theo Locale hiện tại dùng?',
    options: ['String getDisplayName()', 'String getDisplayName(Locale loc)', 'static Locale getDefault()', 'static void setDefault(Locale loc)'],
    correctAnswer: 0
  },
  {
    question: '85) Lấy tên của một Locale được chỉ định dùng?',
    options: ['String getDisplayName(Locale loc)', 'String getDisplayName()', 'static Locale getDefault()', 'static void setDefault(Locale loc)'],
    correctAnswer: 0
  },
  {
    question: '86) Remote Method Invocation (RMI) do Sun đưa ra vào năm nào?',
    options: ['1995', '1996', '1998', '2000'],
    correctAnswer: 1
  },
  {
    question: '87) Chọn từ khóa phạm vi hợp lệ trước aMethod() trong lớp con (override):',
    options: ['Tất cả các đáp án đều đúng', 'public', 'default', 'protected'],
    correctAnswer: 0
  },
  {
    question: '88) Kết quả: int x=3; int y=10; System.out.println(y % x);',
    options: ['1', '0', '2', '3'],
    correctAnswer: 0
  },
  {
    question: '89) Lớp nào không thuộc gói java.net?',
    options: ['SocketOption', 'SocketAddress', 'DatagramPacket', 'Các đáp án đều sai'],
    correctAnswer: 0
  },
  {
    question: '90) Chọn phát biểu đúng về DatagramSocket:',
    options: [
      'Lớp DatagramSocket dùng để chuyển gói dữ liệu theo giao thức UDP',
      'Lớp DatagramSocket dùng để chuyển gói dữ liệu theo giao thức TCP',
      'Cả (1) và (2) đều đúng',
      'Cả (1) và (2) đều sai'
    ],
    correctAnswer: 0
  },
  {
    question: '91) Tìm dòng sai trong đoạn mã (Main viết hoa):',
    options: ['Dòng 3', 'Dòng 1', 'Dòng 5', 'Đúng hoàn toàn'],
    correctAnswer: 0
  },
  {
    question: '92) Tìm dòng sai (từ khóa Class viết hoa):',
    options: ['Dòng 1', 'Dòng 3', 'Dòng 5', 'Đúng hoàn toàn'],
    correctAnswer: 0
  },
  {
    question: '93) Tìm dòng sai (System.Out.println):',
    options: ['Dòng 5', 'Dòng 1', 'Dòng 3', 'Đúng hoàn toàn'],
    correctAnswer: 0
  },
  {
    question: '94) Khi chạy chương trình (a,b,c,s không khai báo) cho kết quả nào?',
    options: ['Báo lỗi', '6', 'S=6', 'Không in gì'],
    correctAnswer: 0
  },
  {
    question: '95) Kết quả của chương trình nhân ba số 10,20,30:',
    options: ['S=6000', '6000', 'Báo lỗi', 'Không in gì'],
    correctAnswer: 0
  },
  {
    question: '96) Kết quả với i=1, if (i<1) else in ra:',
    options: ['I=6', 'I=1', 'I=3', 'I=4'],
    correctAnswer: 0
  },
  {
    question: '97) Vòng for đặt s=0 trong mỗi vòng rồi s=s+i; i=1..3, in s=?',
    options: ['s=3', 's=2', 's=1', 's=0'],
    correctAnswer: 0
  },
  {
    question: '98) Vòng for mỗi vòng s=s+i rồi lại s=0; i=1..3, in s=?',
    options: ['s=0', 's=1', 's=3', 's=6'],
    correctAnswer: 0
  },
  {
    question: '99) Chương trình sai ở dòng nào? (khai báo method thiếu dấu ngoặc)',
    options: ['Dòng 4', 'Dòng 3', 'Dòng 2', 'Không có lệnh sai'],
    correctAnswer: 0
  },
  {
    question: '100) Vòng for: s khởi tạo 0; mỗi vòng s=s+i; rồi s=s+1; i=1..3, in s=?',
    options: ['s=9', 's=8', 's=6', 's=3'],
    correctAnswer: 0
  },

  {
    question: '101) Khi chạy, chương trình sau sẽ cho kết quả nào?',
    options: ['Máy báo lỗi', 's=3', 's=6', 's=1'],
    correctAnswer: 0
  },
  {
    question: '102) Khi chạy, chương trình sau sẽ cho kết quả nào?',
    options: ['Máy báo lỗi', 'Toi di tim cai nua cua toi', 'Ma tim mai den bay gio cha thay', 'Không báo gì cả'],
    correctAnswer: 0
  },
  {
    question: '103) Khi chạy, chương trình sau sẽ cho kết quả nào?',
    options: ['Tinh yeu cua toi oi anh la ai vay', 'Máy báo lỗi', 'Ma tim mai den bay gio cha thay', 'Không báo gì cả'],
    correctAnswer: 0
  },
  {
    question: '104) Chọn phát biểu đúng:',
    options: [
      'Mọi lớp đều kế thừa trực tiếp hoặc gián tiếp từ lớp Object',
      'Lớp Object là một lớp final',
      'Lớp Class là lớp cha của lớp Object',
      'Tất cả các câu trên đều sai'
    ],
    correctAnswer: 0
  },
  {
    question: '105) Lớp nào sau đây dùng để thực hiện các thao tác nhập xuất cơ bản với console?',
    options: ['System', 'Math', 'String', 'String Buffer'],
    correctAnswer: 0
  },
  {
    question: '106) Lớp nào sau đây không phải là lớp bao?',
    options: ['Boolean', 'String', 'Integer', 'Character'],
    correctAnswer: 0
  },
  {
    question: '107) Phơương thức nào sau đây sẽ làm cho giá trị biến s bị thay đổi ?',
    options: ['s.toUpperCase()', 's.concat()', 's.replace()', 'Câu a) và b) đúng'],
    correctAnswer: 0
  },
  {
    question: '108) Chọn phát biểu đúng cho hàm khởi tạo :',
    options: [
      'Tất cả các câu trên đều sai',
      'Tất cả các hàm khởi tạo có kiểu trả về là void',
      'Trình biên dịch sẽ tự động tạo hàm khởi tạo mặc định nếu lớp không định nghĩa hàm khởi tạo',
      'Một lớp sẽ kết thừa các hàm khởi tạo từ lớp cha'
    ],
    correctAnswer: 0
  },
  {
    question: '109) Một kiểu dữ liệu số có dấu có 2 giá trị  +0 và -0 bằng nhau:',
    options: ['Đúng', 'Sai', 'Chỉ đúng với  kiểu số nguyên', 'Chỉ đúng với  kiểu số thực'],
    correctAnswer: 0
  },
  {
    question: '110) Một locale mô tả :',
    options: ['1 2 3', 'Một từ ngữ (1)', 'Tùy chọn vị trí (2)', 'Tùy chọn biến thể khác nhau (option variant) (3)'],
    correctAnswer: 0
  },
  {
    question: '111) Muốn lấy đối tượng Locate mặc định của hệ thống thì dùng phương thức nào sau đây :',
    options: ['Static Locate getDefault()', 'Static void setDefault(Locate loc)', 'String getDisplayName()', 'String getDisplayName(Locate loc)'],
    correctAnswer: 0
  },
  {
    question: '112) Lớp DatagramSocket dùng để ?',
    options: [
      'Chuyển đi một gói dữ liệu theo giao thức UDP (1)',
      'Chứa dữ liệu để gửi đi trên mạng (2)',
      'Định vị địa chỉ tài nguyên trên mạng (3)',
      'Tất cả (1),(2),(3) đều sai.'
    ],
    correctAnswer: 0
  },

  {
    question: '1) Đoạn mã lệnh dưới đây thực hiện việc gì: FileOutputStream os = new FileOutputStream("abc.txt"); String s="Welcome to File Input Output Stream"; for(int i=0;i<s.length();++i) os.write(s.charAt(i));',
    options: ['Tạo file abc.txt.', 'Đọc một chuỗi.', 'Sắp xếp chuỗi kí tự.', 'Đếm độ dài chuỗi kí tự.'],
    correctAnswer: 0
  },
  {
    question: '2) Đoạn mã lệnh dưới đây sai ở dòng nào? FileOutputStream os = 1 FileOutputStream("abc.txt"); ...',
    options: ['1.', '2.', '3.', '4.'],
    correctAnswer: 0
  },
  {
    question: '3) Đoạn mã lệnh dưới đây thực hiện việc gì? (đọc abc.txt, available, read, in ra, đóng và xóa file)',
    options: ['Mở file abc.txt ra đọc.', 'Mở file abc.txt ra xóa.', 'Mở file abc.txt ra ghi.', 'Mở file abc.txt ra viết.'],
    correctAnswer: 0
  },
  {
    question: '4) Đoạn mã lệnh dưới đây sai dòng nào? (dùng os.available thay vì is.available)',
    options: ['1.', '2.', '3.', '8.'],
    correctAnswer: 1
  },
  {
    question: '5) Đoạn mã lệnh dưới đây sai chỗ nào? (FileOnputStream thay vì FileInputStream)',
    options: ['1.', '4.', '3.', '5.'],
    correctAnswer: 0
  },
  {
    question: '6) Đoạn mã lệnh dưới đây sai chỗ nào? (thiếu i trong int byrd)',
    options: ['6.', '1.', '5.', '4.'],
    correctAnswer: 2
  },
  {
    question: '7) Đoạn mã lệnh dưới đây sai chỗ nào? (System.iut.println...)',
    options: ['6.', '1.', '2.', '3.'],
    correctAnswer: 0
  },
  {
    question: '8) Đoạn mã lệnh dưới đây sai chỗ nào? (danh số dòng 1..10; System.iut.println ở dòng 6)',
    options: ['Dòng 6.', 'Dòng 1.', 'Không sai chỗ nào.', '10'],
    correctAnswer: 0
  },
  {
    question: '8) Cho biết kết quả sau khi hình thành chương trình (StringBuffert, s.leght, s.sppend...):',
    options: ['Value is Hello', 'Lỗi biên dịch tại dòng 4 và dòng 5', 'Không có giá trị xuất', 'Thông báo NullPointerException'],
    correctAnswer: 0
  },
  {
    question: '9) Lớp NumberFormat được dùng cho định dạng địa phương nào?',
    options: ['A, B và C', 'B, C và D', 'A, B và D', 'A, B, C và D'],
    correctAnswer: 0
  },
  {
    question: '10) Kết quả biên dịch/chạy chương trình Conditionnal (toán tử ? : bị viết sai):',
    options: ['Lỗi biên dịch tại dòng số 5', '9', '9,0', '99,99'],
    correctAnswer: 0
  },
  {
    question: '11) Chọn khai báo đúng cho phương thức main()',
    options: ['public static void main(String[] args)', 'public void main(String[] arg)', 'public static void main()', 'public static int main(String[] arg)'],
    correctAnswer: 0
  },
  {
    question: '12) Thứ tự đúng trong tập tin nguồn:',
    options: ['Khai báo package đầu tiên; thứ tự của import và khai báo lớp là tùy ý', 'import, package, class', 'import trước; package và class tùy ý', 'package, import, class'],
    correctAnswer: 0
  },
  {
    question: '13) int[] x = new int[25]; Kết quả đúng:',
    options: ['x.length = 25', 'x[0] = có giá trị null', 'x[25] có giá trị 0', 'x[24] chưa được định nghĩa'],
    correctAnswer: 0
  },
  {
    question: '14) Chọn phát biểu đúng về Writer:',
    options: ['Câu a) và b) đúng', 'a. Writer ghi ký tự với nhiều mã hóa khác nhau', 'b. Writer ghi ký tự Unicode', 'c. Writer ghi kiểu dữ liệu cơ sở'],
    correctAnswer: 0
  },
  {
    question: '15) Chọn phát biểu đúng (Event/Adapter):',
    options: ['Tất cả các câu trên đều đúng', 'Event adapter cung cấp cài đặt mặc định cho listener tương ứng', 'WindowAdapter xử lý sự kiện cửa sổ', 'Event listeners là interface quy định các phương thức cần cài đặt'],
    correctAnswer: 0
  },
  {
    question: '16) Đoạn mã Question sai chỗ nào? (viod, Interger, Boolean trong if...)',
    options: ['Câu b) và c) đúng', 'Đoạn mã không có lỗi', 'Điều kiện if phải là boolean thay vì Boolean', 'Chỉ số for là int thay vì Integer'],
    correctAnswer: 0
  },
  {
    question: '17) Đoạn chương trình MyClass biên dịch gặp lỗi do:',
    options: ['Không tạo ra đối tượng tham chiếu tới lớp không tĩnh (non static class)', 'Truy cập vượt chỉ số mảng', '2 đúng', '2 sai'],
    correctAnswer: 0
  },
  {
    question: '18) Chọn phát biểu đúng (final/abstract):',
    options: ['Một lớp final không thể chứa các phương thức trừu tượng (a)', 'Một lớp trừu tượng không thể chứa phương thức final (b)', 'a, b đều đúng', 'a, b đều sai'],
    correctAnswer: 0
  },
  {
    question: '19) Câu nào sau đây là đúng:',
    options: ['1. int = 10', '2. byte b=257', '3. char c="a"', '4. float f=1.3'],
    correctAnswer: 0
  },
  {
    question: '20) Chọn câu phát biểu đúng:',
    options: ['Câu 1 và 3 đúng', 'Một đối tượng File truy cập file ở thư mục hiện hành', 'Tạo đối tượng File thì file tương ứng cũng tạo trên đĩa', 'Đối tượng File dùng truy cập tập tin và thư mục trên đĩa'],
    correctAnswer: 0
  },
  {
    question: '21) Khai báo giao diện nào đúng?',
    options: ['public interface MyInterface {}', 'public interface MyInterface ()', 'public class MyInterface {}', 'public abtract MyInterface {}'],
    correctAnswer: 0
  },
  {
    question: '22) Lưu số nguyên dương tối đa một triệu, kiểu tiết kiệm bộ nhớ nhất:',
    options: ['int', 'float', 'Double', 'Byte'],
    correctAnswer: 0
  },
  {
    question: '23) ArrayList dùng cấu trúc mảng nhưng có 2 đặc điểm khác:',
    options: ['tất cả đều đúng', 'Không cần khai báo trước kiểu phần tử', 'Không cần xác định trước số lượng phần tử', 'tất cả đều sai'],
    correctAnswer: 0
  },
  {
    question: '24) Hàm khởi tạo ArrayList nào đúng:',
    options: ['tất cả đều đúng', 'ArrayList(int initialCapactity)', 'ArrayList(Collection c)', 'ArrayList()'],
    correctAnswer: 0
  },
  {
    question: '25) Các methods chính là:',
    options: ['tất cả đều đúng', 'add(Object o), remove(Object o)', 'get(int index), size()', 'isEmpty(), contains(Object o), clear()'],
    correctAnswer: 0
  },
  {
    question: '26) Vector và ArrayList',
    options: ['Hoàn toàn giống ArrayList về chức năng', 'Hoàn toàn không giống ArrayList về chức năng', 'tất cả đều đúng', 'tất cả đều sai'],
    correctAnswer: 0
  },
  {
    question: '27) Khi không làm việc với thread nên dùng ... vì nhanh hơn ...',
    options: ['ArrayList ..... Vector', 'Vector ...... ArrayList', 'tất cả đều đúng', 'tất cả đều sai'],
    correctAnswer: 0
  },
  {
    question: '28) Khi có nhiều thread cùng ... phần tử trong Vector thì chỉ 1 thread được làm việc đó',
    options: ['add hoặc remove', 'add hoặc remove 2', 'add hoặc remove 3', 'add hoặc remove 4'],
    correctAnswer: 0
  },
  {
    question: '29) LinkedList là gì?',
    options: ['Về cấu trúc, các object chứa liên kết đến object kế sau nó trong list.', '...liên kết đến object kế trước...', 'tất cả đều đúng', 'tất cả đều sai.'],
    correctAnswer: 0
  },
  {
    question: '30) Duyệt list chậm hơn ArrayList/Vector; nhưng add/remove 1 phần tử thì ...',
    options: ['rất nhanh vì không phải thực hiện dồn các phần tử', 'rất chậm vì không phải thực hiện dồn các phần tử', 'tất cả đều đúng', 'tất cả đều sai'],
    correctAnswer: 0
  },
  {
    question: '31) Ngoài các method như ArrayList, LinkedList còn có thêm các method (add.First, add.Last, get.First)',
    options: ['tất cả đều sai', 'add.First()', 'add.Last()', 'get.First()'],
    correctAnswer: 0
  },
  {
    question: '32) Ngoài các method như ArrayList, LinkedList còn có thêm các method',
    options: ['tất cả đều đúng', 'poll() = getFirst() + removeFirst()', 'removeFirst()', 'peek() = getFirst()'],
    correctAnswer: 0
  },
  {
    question: '33) Khi nào dùng ArrayList, khi nào dùng LinkedList?',
    options: ['Nếu thường xuyên phải truy nhập trực tiếp dữ liệu -> dùng ArrayList', 'Nếu ít truy nhập trực tiếp -> dùng ArrayList', 'Nếu không truy nhập trực tiếp -> dùng ArrayList', 'tất cả đều đúng'],
    correctAnswer: 0
  },
  {
    question: '34) Nếu chương trình thường xuyên thêm/xóa phần tử (đặc biệt ở giữa) thì ...',
    options: ['thì nên sử dụng LinkedList', 'thì nên sử dụng ArrayList', 'tất cả đều đúng', 'tất cả đều sai'],
    correctAnswer: 0
  },
  {
    question: '35) Set ? => Cũng là .... Điểm khác giữa Set và List là Set không có 2 phần tử giống nhau',
    options: ['kiểu collection như list', 'kiểu collection như Linkedlist', 'kiểu collection như Arraylist', 'kiểu collection như Vectorlist'],
    correctAnswer: 0
  },
  {
    question: '36) Cũng là kiểu collection như list. Điểm khác biệt giữa Set và List là trong Set...',
    options: ['không bao giờ có 2 phần tử giống nhau', 'không bao giờ có 3 phần tử giống nhau', 'không bao giờ có 4 phần tử giống nhau', 'không bao giờ có 1 phần tử giống nhau'],
    correctAnswer: 0
  },
  {
    question: '37) Khai báo HashSet',
    options: ['HashSet hs = new HashSet();', 'HashSet hs = HashSet();', 'HashSet hs = add new HashSet();', 'HashSet hs = new HashSet;'],
    correctAnswer: 0
  },
  {
    question: '38) Hàm khởi tạo HashSet',
    options: ['HashSet()', 'HashSet', 'New HashSet()', 'Add new HashSet()'],
    correctAnswer: 0
  },
  {
    question: '39) Hàm khởi tạo HashSet',
    options: ['HashSet(Collection c)', 'new HashSet(Collection c)', 'Add new HashSet(Collection c)', 'Set(Collection c)'],
    correctAnswer: 0
  },
  {
    question: '40) Hàm khởi tạo HashSet',
    options: ['HashSet(int capactity)', 'New HashSet(int capactity)', 'Add New HashSet(int capactity)', 'Hash (int capactity)'],
    correctAnswer: 0
  },

  {
    question: '41) Hàm khởi tạo HashSet',
    options: ['tất cả đều đúng', 'HashSet()', 'HashSet(Collection c)', 'HashSet(int capactity)'],
    correctAnswer: 0
  },
  {
    question: '42) Các method chính HashSet',
    options: ['tất cả đều đúng', 'add(Object o)', 'remove(Object o)', 'contains(Object o)'],
    correctAnswer: 0
  },
  {
    question: '43) Các method chính HashSet',
    options: ['tất cả đều sai', 'ad(Object o)', 'rem (Object o)', 'contain(Object o)'],
    correctAnswer: 0
  },
  {
    question: '44) Tuy nhiên Set không có hàm ..... để lấy ra 1 phần tử trực tiếp',
    options: ['get', 'call', 'take', 'hand'],
    correctAnswer: 0
  },
  {
    question: '45) Muốn duyệt các phần tử của Set, sử dụng ........',
    options: ['con trỏ iterator', 'biến iterator', 'hàm iterator', 'phần tử iterator'],
    correctAnswer: 0
  },
  {
    question: '46) LinkedHashSet ?',
    options: ['Giống như HashSet ngoại trừ thứ tự các phần tử trong set là thứ tự khi add vào;', 'Giống như ArrayList ngoại trừ thứ tự các phần tử trong set là thứ tự khi add vào', 'tất cả đều đúng', 'tất cả đều sai'],
    correctAnswer: 0
  },
  {
    question: '47) TreeSet ? => Thứ tự các phần tử trong TreeSet .......... vào thứ tự lúc add mà phụ thuộc vào thứ tự của các object trong set',
    options: ['không phụ thuộc', 'có phụ thuộc', 'tất cả đều đúng', 'tất cả đều sai'],
    correctAnswer: 0
  },
  {
    question: '48) Thứ tự các phần tử trong TreeSet không phụ thuộc vào thứ tự lúc add ............. trong set',
    options: ['mà phụ thuộc vào thứ tự của các object', 'mà phụ thuộc vào thứ tự của các Tree', 'mà phụ thuộc vào thứ tự của các Set', 'mà phụ thuộc vào thứ tự của các TreeSet'],
    correctAnswer: 0
  },
  {
    question: '49) Map ?',
    options: ['Map là kiểu dữ liệu dạng từ điển, mỗi phần tử bao gồm key và value', 'Map là kiểu dữ liệu dạng từ điển, các phần tử bao gồm key và value', 'Map là kiểu dữ liệu dạng từ điển, một phần tử bao gồm key và value', 'Map là kiểu dữ liệu dạng từ điển, hai phần tử bao gồm key và value'],
    correctAnswer: 0
  },
  {
    question: '50) Hàm khởi tạo HashMap ?',
    options: ['tất cả đều đúng', 'HashMap()', 'HashMap(Collection c)', 'HashMap(int capacity)'],
    correctAnswer: 0
  },
  {
    question: '51) Các methods chính HashMap ?',
    options: ['tất cả đều đúng', 'put(Object key, Object value), get(Object key)', 'remove(Object key), containsKey(Object key)', 'containsValue(Object value), size(), isEmpty'],
    correctAnswer: 0
  },
  {
    question: '52) Các methods chính HashMap ?',
    options: ['tất cả đều sai', 'puts(Object key, Object value), gets(Object key)', 'removes(Object key), containsKeys(Object key)', 'tất cả đều đúng'],
    correctAnswer: 0
  },
  {
    question: '53) HashTable cũng giống như HashMap ngoại trừ các .............. là synchronized',
    options: ['method của HashTable', 'methods của HashTables', 'HashTable của method', 'tất cả đều đúng'],
    correctAnswer: 0
  },
  {
    question: '54) LinkedHashMap ?',
    options: ['Là HashMap nhưng các phần tử được sắp xếp đúng như thứ tự insert vào map', 'Là HashMap nhưng các đối tượng được sắp xếp đúng như thứ tự insert vào map', 'Là HashMap nhưng các thành phần được sắp xếp đúng như thứ tự insert vào map', 'Là HashMap nhưng các toán tử được sắp xếp đúng như thứ tự insert vào map'],
    correctAnswer: 0
  },
  {
    question: '55) Các phần tử của TreeMap được sắp xếp theo thứ tự ....... tự nhiên (natural order) của các key',
    options: ['so sánh', 'đối xứng', 'trước sau', 'tuần tự'],
    correctAnswer: 0
  },
  {
    question: '56) Những interface cơ bản trong Java Collections Framework ?',
    options: ['tất cả đều đúng', 'Collection', 'Set', 'List , Map'],
    correctAnswer: 0
  },
  {
    question: '57) Collection, biểu thị cho ..........., những đối tượng này được gọi là phần tử của tập hợp',
    options: ['nhóm các đối tượng', 'mảng các đối tượng', 'vài các đối tượng', 'rất nhiều các đối tượng'],
    correctAnswer: 0
  },
  {
    question: '58) Set, là một tập hợp mà …….. những phần tử trùng nhau.',
    options: ['không chứa', 'có chứa', 'tất cả đều đúng', 'tất cả đều sai'],
    correctAnswer: 0
  },
  {
    question: '59) List, là một tập hợp ............ và có thể chứa những phần tử trùng nhau.',
    options: ['đã sắp sếp', 'chưa sắp sếp', 'tất cả đều đúng', 'tất cả đều  sai'],
    correctAnswer: 0
  },
  {
    question: '60) Map, là …….. mà ánh xạ các khoá vào các giá trị và không chứa những khoá trùng nhau',
    options: ['là một đối tượng', 'là vài đối tượng', 'là nhóm đối tượng', 'là danh sách đối tượng'],
    correctAnswer: 0
  },
  {
    question: '61) Priority queue ?',
    options: ['hàng đợi ưu tiên', 'hàng đợi chưa sắp xếp', 'hàng đợi hỗn hợp', 'một danh sách'],
    correctAnswer: 0
  },
  {
    question: '62) Priority queue: Thứ tự truy xuất các phần tử ....... của chúng.',
    options: ['phụ thuộc vào giá trị', 'phụ thuộc vào kiểu', 'phụ thuộc vào toán tử', 'phụ thuộc vào phạm vi'],
    correctAnswer: 0
  },
  {
    question: '63) Các phần tử được truy xuất theo thứ tự .....',
    options: ['First In First Out (FIFO)', 'Last In First Out (LIFO)', 'tất cả đều đúng', 'tất cả đều sai'],
    correctAnswer: 0
  },
  {
    question: '64) Các phương thức của Queue',
    options: ['tất cả đều đúng', 'offer(), peek()', 'poll(), remove()', 'element()'],
    correctAnswer: 0
  },
  {
    question: '65) Lớp PriorityQueue ?',
    options: ['tất cả đều đúng', 'Các phần tử được sắp xếp theo thứ tự tự nhiên hoặc dựa vào một comparator', 'Không chấp nhận phần tử có giá trị null', 'tất cả đều sai'],
    correctAnswer: 0
  },
  {
    question: '66) Các phương thức của PriorityQueue',
    options: ['tất cả đều đúng', 'add(), clear()', 'offer(), peek(), poll()', 'remove(), size(), comparator()'],
    correctAnswer: 0
  },
  {
    question: '67) Sự khác nhau giữa Array và ArrayList?',
    options: ['Array có thể chứa kiểu dữ liệu cơ bản và đối tượng, trong khi ArrayList chỉ chứa đối tượng', 'Array không chứa kiểu dữ liệu cơ bản và đối tượng, trong khi ArrayList chỉ chứa đối tượng', 'Array không chứa kiểu dữ liệu đối tượng, trong khi ArrayList chỉ chứa đối tượng', 'Array có thể chứa kiểu dữ liệu đối tượng, trong khi ArrayList chỉ chứa đối tượng'],
    correctAnswer: 0
  },
  {
    question: '68) Sự khác nhau giữa Array và ArrayList?',
    options: ['Array cố định số lượng phần tử, ArrayList thì động', 'ArrayList cố định số lượng phần tử, Array thì động', 'tất cả đều đúng', 'tất cả đều sai'],
    correctAnswer: 0
  },
  {
    question: '69) Thế nào là Priority Queue ?',
    options: ['một queue (hàng đợi) không giới hạn (unbound)', 'một queue (hàng đợi) có giới hạn (unbound)', 'tất cả đều sai', 'tất cả đều đúng'],
    correctAnswer: 0
  },
  {
    question: '70) Khác biệt mảng có thứ tự và không thứ tự: lợi ích chính về thời gian tìm kiếm',
    options: ['O(logn) ........ O(n)', 'O(n) ........ O(logn)', 'tất cả đều đúng', 'tất cả đều sai'],
    correctAnswer: 0
  },

    ],

    csdl_hdt: [
        
  {
    question: 'Câu 1: Cơ sở dữ liệu là:',
    options: [
      'Là một tập hợp các dữ liệu có cấu trúc chặt chẽ về logic được lưu trữ trên các thiết bị ghi nhớ.',
      'Biểu diễn một phần thế giới thực.',
      'Được thiết kế, xây dựng và lưu trữ với một mục đích xác định và phục vụ cho nhiều người và một số ứng dụng nhất định.',
      'Tất cả các ý trên.'
    ],
    correctAnswer: 3 // đáp án d
  },
  {
    question: 'Câu 2: Tính dị thường của dữ liệu là:',
    options: [
      'Một dữ liệu nào đó được lưu trữ đi lưu trữ lại ở nhiều nơi trong cùng một CSDL, gây nên sự khác nhau về dữ liệu.',
      'Thông tin về cùng một đối tượng có thể khác nhau trên các tập tin khác nhau trong cùng một hệ thống thông tin.',
      'Là các tập tin được tạo bởi nhiều lập trình viên khác nhau nên có nhiều nội dung khác nhau về cùng một đối tượng.',
      'Tất cả các ý trên.'
    ],
    correctAnswer: 1 // đáp án b
  },
  {
    question: 'Câu 3: Hậu quả của việc dư thừa dữ liệu:',
    options: [
      'Kho lưu trữ và chi phí sản xuất lớn hơn.',
      'Sự không nhất quán của dữ liệu.',
      'Xuất hiện nhiều bản copy của cùng một dữ liệu sẽ không phù hợp lâu dài.',
      'Tất cả các ý trên.'
    ],
    correctAnswer: 3 // đáp án d
  },
  {
    question: 'Câu 4: Các thông tin của khách hàng đã có trong hệ thống khách hàng cuả một ngân hàng. Nay ngân hàng mở rộng thêm một số loại hình kinh doanh khác, phần mở rộng này không được tính đến trong hệ thống cũ vì vậy các thông tin của khách hàng trong hệ thống cũ không được cập nhật tự động sang hệ thống mới, nên hệ thống mới phải tự cập nhật mới. Tình huống trên làm dữ liệu trong hệ thống ngân hàng bị:',
    options: [
      'Dư thừa dữ liệu.',
      'Mất mát dữ liệu.',
      'Dữ liệu bị sai.',
      'Tất cả các ý trên.'
    ],
    correctAnswer: 0 // đáp án a
  },
  {
    question: 'Câu 5: Các thông tin của khách hàng đã có trong hệ thống khách hàng cuả một ngân hàng. Nay ngân hàng mở rộng thêm một số loại hình kinh doanh khác, phần mở rộng này đã được tính đến trong hệ thống cũ vì vậy các thông tin của khách hàng trong hệ thống được cập nhật tự động sang hệ thống mới. Tình huống trên làm dữ liệu trong hệ thống ngân hàng?',
    options: [
      '(1) Nhất quán.',
      '(2) Không bị dư thừa.',
      '(3) Không phải cập nhật các thông tin mới của khách hàng trong hệ thống mới.',
      '(1) và (2).'
    ],
    correctAnswer: 3, // đáp án d
    image: 'images/hinh1.png' // Cập nhật đường dẫn nếu ảnh khác
  },
  {
    question: 'Câu 6: Ưu điểm của cách lưu trữ dữ liệu trong CSDL là:',
    options: [
      'Giảm thiểu sự trùng lặp thông tin đến mức thấp nhất, do đó đảm bảo tính nhất quán, tính toàn vẹn của dữ liệu.',
      'Chia sẻ thông tin cho một nhóm người dùng nhất định, tiết kiệm tài nguyên, dữ liệu được truy xuất theo một cách chung.',
      'Khả năng bảo vệ thông tin chỉ dùng cho ứng dụng quản lý CSDL.',
      'Tất cả các ý trên.'
    ],
    correctAnswer: 0 // đáp án a
  },
  {
    question: 'Câu 7: Các mức của một hệ cơ sở dữ liệu là:',
    options: [
      'Mức vật lý, mức quan niệm, mức khung nhìn.',
      'Mức vật lý, mức logic, mức người dùng.',
      'Mức logic mức quan niệm và mức khung nhìn.',
      'Mức vật lý, mức khung nhìn và mức người dùng.'
    ],
    correctAnswer: 0 // đáp án a
  },
  {
    question: 'Câu 8: Mức khung nhìn trong kiến trúc cơ sở dữ liệu là mức có đặc điểm:',
    options: [
      'Là lớp của những người sử dụng, mức ngoài là khác nhau với mỗi người sử dụng.',
      'Mô tả những dữ liệu nào được lưu trữ trong CSDL và mối quan hệ giữa chúng.',
      'Mô tả dữ liệu được thực sự lưu trữ như thế nào trong CSDL.',
      'Tất cả các ý trên.'
    ],
    correctAnswer: 0 // đáp án a
  },
  {
    question: 'Câu 9: Trong hướng đối tượng, tập hợp các thực thể hay các đối tượng có cùng đặc tính được gọi là:',
    options: [
      'Lớp.',
      'Đối tượng.',
      'Thực thể.',
      'Phương thức.'
    ],
    correctAnswer: 0 // đáp án a
  },
  {
    question: 'Câu 10: Mức vật lý – Physical level, được hiểu là:',
    options: [
      'Mức ngoài của CSDL, gồm một số khung nhìn khác nhau của những người sử dụng đặt vào CSDL.',
      'Mô tả những dữ liệu nào được lưu trữ trong CSDL và có những mối quan hệ nào giữa chúng.',
      'Mức trong của CSDL, mô tả dữ liệu được thực sự lưu trữ như thế nào trong CSDL.',
      'Tất cả các ý trên.'
    ],
    correctAnswer: 2 // đáp án c
  },
  {
    question: 'Câu 11: Mức thấp nhất mô tả dữ liệu được lưu trữ như thế nào là mức:',
    options: [
      'Mức vật lý.',
      'Mức quan niệm.',
      'Mức logic.',
      'Mức ngoài.'
    ],
    correctAnswer: 0 // đáp án a
  },
  {
    question: 'Câu 12: Mức mà mô hình dữ liệu phản ánh thế giới thực để lưu trữ trong CSDL là mức nào:',
    options: [
      'Mức quan niệm.',
      'Mức người dùng.',
      'Mức vật lý.',
      'Mức vật lý và mức quan niệm.'
    ],
    correctAnswer: 0 // đáp án a
  },
  {
    question: 'Câu 13: Hệ quản trị cơ sở dữ liệu là:',
    options: [
      'Một hệ thống các chương trình cho phép người sử dụng giao tiếp với CSDL.',
      'Một hệ thống các chương trình cho phép tổ chức cơ sở dữ liệu lưu trữ trên thiết bị ghi nhớ.',
      'Một hệ thống các chương trình cho chúng ta các thủ tục để sửa đổi cấu trúc CSDL, cập nhật và truy vấn trên các dữ liệu.',
      'Tất cả các ý trên.'
    ],
    correctAnswer: 3 // đáp án d
  },
  {
    question: 'Câu 14: Hệ quản trị CSDL có các chức năng:',
    options: [
      'Hỗ trợ mô hình dữ liệu để tổ chức CSDL.',
      'Hỗ trợ một vài ngôn ngữ lập trình cao cấp cho phép người sử dụng định nghĩa cấu trúc dữ liệu, truy xuất dữ liệu.',
      'Quản lý giao dịch và điều khiển truy xuất.',
      'Có khả năng bảo vệ và phục hồi dữ liệu.',
      'Tất cả các ý trên.'
    ],
    correctAnswer: 4 // đáp án e
  },
  {
    question: 'Câu 15: Mô hình thực thể liên kết có vai trò gì trong việc thiết kế CSDL:',
    options: [
      'Giảm bớt tính tự nhiên trong cuộc cuả con ngời và gần gũi hơn với ngôn ngữ máy.',
      'Không có vai trò gì.',
      'Định nghĩa các đối tượng được cài đặt vào CSDL.',
      'Định nghĩa các thực thể sẽ được cài đặt vào hệ thống.'
    ],
    correctAnswer: 0 // đáp án a
  },
  {
    question: 'Câu 16: Lược đồ của CSDL là gì:',
    options: [
      'Toàn bộ mô tả CSDL, tương ứng với ba mức của hệ CSDL có ba loại lược đồ.',
      'Toàn bộ dữ liệu được lưu trữ trong CSDL tại một thời điểm nhất định, có ba loại lược đồ.',
      'Toàn bộ thể hiện của CSDL mô tả cách nhìn dữ liệu khác nhau của những người sử dụng khác nhau.',
      'Toàn bộ mô tả về cách thức lưu trữ dữ liệu vào bảng hay đối tượng của CSDL'
    ],
    correctAnswer: 0 // đáp án a
  },
  {
    question: 'Câu 17: Kiểu thực thể (Entity type) là:',
    options: [
      'Là khái niệm để chỉ một lớp các đối tượng có cùng đặc tính chung mà người ta muốn quản lý thông tin về nó.',
      'Là những cá thể của một đối tượng cụ thể trong thế giới thực.',
      'Là một tập hợp gồm các thực thể có tính chất giống nhau.',
      'Gồm các thực thể cùng được thể hiện bởi một tập các thuộc tính.'
    ],
    correctAnswer: 3 // đáp án d
  },
  {
    question: 'Câu 18: Trong các thuộc tính của thực thể, thế nào là thuộc tính phức hợp (composite attribute):',
    options: [
      'Thuộc tính có kiểu dữ liệu nguyên tố.',
      'Thuộc tính được định nghĩa bởi các thuộc tính khác.',
      'Thuộc tính có một giá trị cho một thực thể cụ thể.',
      'Thuộc tính có một tập hợp các giá trị cho cùng một thực thể.',
      'Thuộc tính mà giá trị của nó được suy diễn từ các thực thể liên quan.',
      'Thuộc tính phức tạp dùng đến khi không có thông tin về thuộc tính.'
    ],
    correctAnswer: 1 // đáp án b
  },
  {
    question: 'Câu 19: Thể hiện của CSDL là gì:',
    options: [
      'Toàn bộ mô tả CSDL, tương ứng với ba mức của hệ CSDL có nhiều loại thể hiện.',
      'Toàn bộ dữ liệu được lưu trữ trong CSDL tại một thời điểm nhất định, có nhiều thể hiện.',
      'Toàn bộ mô tả cách nhìn dữ liệu khác nhau của những người sử dụng khác nhau.',
      'Toàn bộ mô tả về cách thức lưu trữ dữ liệu vào bảng hay đối tượng của CSDL',
      'Tất cả các ý trên.'
    ],
    correctAnswer: 1 // đáp án b
  },
  {
    question: 'Câu 20: Thực thể (Entity) là:',
    options: [
      'Là khái niệm để chỉ một lớp các đối tượng có cùng đặc tính chung mà người ta muốn quản lý thông tin về nó.',
      'Là những cá thể của một đối tượng cụ thể trong thế giới thực.',
      'Là một tập hợp gồm các thực thể có tính chất giống nhau.',
      'Gồm các thực thể cùng được thể hiện bởi một tập các thuộc tính.'
    ],
    correctAnswer: 0 // đáp án a
  },


  {
    question: 'Câu 21: Tập thực thể (Entity set) là:',
    options: [
      'Là khái niệm để chỉ một lớp các đối tượng có cùng đặc tính chung mà người ta muốn quản lý thông tin về nó.',
      'Là những cá thể của một đối tượng cụ thể trong thế giới thực.',
      'Là một tập hợp gồm các thực thể có tính chất giống nhau.',
      'Gồm các thực thể cùng được thể hiện bởi một tập các thuộc tính.'
    ],
    correctAnswer: 2 // đáp án c
  },
  {
    question: 'Câu 22: Theo ví dụ sau: (1)NHANVIEN(Tên, Tuổi, Lương), (2)(nv1(Hà, 25, 3tr), nv2(Hưng, 30, 3 ,5tr)), (3)Ngày_sinh, (4)Công_ty. Kiểu thực thể là :',
    options: ['(1).', '(2).', '(3).', '(4).'],
    correctAnswer: 0 // đáp án a
  },
  {
    question: 'Câu 23: Theo ví dụ sau: (1)NHANVIEN(Tên, Tuổi, Lương), (2)(nv1(Hà, 25, 3tr), nv2(Hưng, 30, 3 ,5tr)), (3)Ngày_sinh, (4)Công_ty. Thực thể là :',
    options: ['NHANVIEN.', 'nv1 và nv2.', 'Hưng và Hà.', 'Công_ty.'],
    correctAnswer: 1 // đáp án b
  },
  {
    question: 'Câu 24: Trong các thuộc tính của thực thể có thể lồng các thuộc tính nào vào nhau để biểu diễn một thuộc tính phức tạp (complex attribute):',
    options: [
      'Thuộc tính phức hợp và đa trị.',
      'Thuộc tính phức hợp và đơn trị.',
      'Thuộc tính phức hợp và đơn giản.',
      'Thuộc tính phức hợp và lưu trữ.',
      'Thuộc tính phức hợp và dẫn xuất'
    ],
    correctAnswer: 0 // đáp án a
  },
  {
    question: 'Câu 25: Thuộc tính của thực thể sử dụng giá trị rỗng (null) khi:',
    options: [
      'Khi một thuộc tính không có giá trị đối với một thực thể.',
      'Dùng để chỉ ra giá trị của thuộc tính là chưa biết.',
      'Chỉ ra là không có thông tin, hoặc không biết được sự tồn tại của giá trị.',
      'Tất cả các ý trên.'
    ],
    correctAnswer: 3 // đáp án d
  },
  {
    question: 'Câu 26: Trong phân tích thiết kế hệ thống thường phân ra làm 3 loại thuộc tính của thực thể, đó là:',
    options: [
      'Thuộc tính khóa, thuộc tính mô tả, thuộc tính kết nối.',
      'Thuộc tính định danh, thuộc tính lưu trữ, thuộc tính quan hệ.',
      'Thuộc tính khóa, thuộc tính định danh, thuộc tính kết nối.',
      'Thuộc tính định danh, thuộc tính mô tả, thuộc tính quan hệ.'
    ],
    correctAnswer: 0 // đáp án a
  },
  {
    question: 'Câu 27: Thuộc tính định danh trong mô hình thực thể liên kết được hiểu là:',
    options: ['Thuộc tính khoá.', 'Thuộc tính có một giá trị.', 'Thuộc tính không nhập giá trị.', 'Thuộc tính đặt tên.'],
    correctAnswer: 0 // đáp án a
  },
  {
    question: 'Câu 28: Cho thực thể PHIEUTHU(so_phieu, tên_khách, dia_chi_khach, ngay_ lap, ma_hang, ten_hang, so_luong,don_gia). Thuộc tính nào là định danh?',
    options: ['so_phieu.', 'ngay_lap.', 'ma_hang.', 'khong có đáp an đúng'],
    correctAnswer: 0 // đáp án a
  },
  {
    question: 'Câu 29: Thuộc tính khóa là thuộc tính mà các giá trị của nó nhận dạng một thực thể một cách duy nhất trong một kiểu thực thể. Vậy thuộc tính này gồm:',
    options: ['Một thuộc tính duy nhất.', 'Một tập tối thiểu các thuộc tính.', 'Ít nhất là một thuộc tính.', 'Tất cả các ý trên đều đúng.'],
    correctAnswer: 2 // đáp án c
  },
  {
    question: 'Câu 30: Phương thức được hiểu là:',
    options: [
      'Những tác động của lớp và đối tượng vào hệ thống.',
      'Hình thức mà lớp đó đối xử với hệ thống.',
      'Là những chơng trình con của hệ thống.',
      'Là các đoạn “code” của chương trình.'
    ],
    correctAnswer: 0 // đáp án a
  },
  {
    question: 'Câu 31: Giả sử ta có kiểu thực thể SV(MSV, hoten, ngaysinh,gioitinh) và ta có thông tin : msv=’01’, ngaysinh={1/5/1980}, gioitinh=nam. Thông tin chi tiết bên được hiểu là gì?.',
    options: ['Một cá thể của kiểu thực thể SV.', 'Một tập thực thể của kiểu thực thể SV.', 'Một bản ghi trong bảng SV.', 'Tất cả các ý trên đều đúng.'],
    correctAnswer: 0 // đáp án a
  },
  {
    question: 'Câu 32: Trong lược đồ ER, hình e-líp cạnh đôi ký hiệu cho loại thuộc tính nào:',
    options: ['Thuộc tính đa trị.', 'Thuộc tính phức hợp.', 'Thuộc tính dẫn xuất.', 'Không biểu diễn thuộc tính.'],
    correctAnswer: 0 // đáp án a
  },
  {
    question: 'Câu 33: Tính đóng gói được hiểu là:',
    options: [
      'Code và dữ liệu được gói với nhau trong cùng một lớp.',
      'Các đối tượng đợc gói với nhau trong cùng một lớp.',
      'Toàn bộ chương trình tạo thành một gói thống nhất.',
      'Code và dữ liệu tạo thành một khối thống nhất. Nếu dùng dữ liệu thì phải sử dụng code và ngược lại.'
    ],
    correctAnswer: 0 // đáp án a
  },
  {
    question: 'Câu 34: Tính kế thừa được hiểu là:',
    options: [
      'Code và dữ liệu kế thừa nhau từ lớp cũ sang lớp mới.',
      'Có thể kế thừa code và dữ liệu từ lớp cũ sang lớp mới.',
      'Có thể kế thừa phương thức từ lớp cũ sang lớp mới.',
      'Có thể kế thừa dữ liệu từ lớp cũ sang lớp mới.'
    ],
    correctAnswer: 1 // đáp án b
  },
  {
    question: 'Câu 35: Với phiếu giao hàng trên. Lớp Hàng gồm những thuộc tính nào?.',
    options: [
      'HANG(mã_hàng, tên_hàng, đơn_vị, đơn_giá, số_lượng).',
      'HANG(mã_hàng, tên_hàng, đơn_vị).',
      'HANG(mã_hàng, tên_hàng, đơn_vị, đơn_giá, số_lượng, thành_tiền).',
      'Không có đáp án đúng.'
    ],
    correctAnswer: 0 // đáp án a
  },
  {
    question: 'Câu 36: Với phiếu giao hàng trên. Lớp Phiếu_giao_hàng gồm các thuộc tính:',
    options: [
      'Không có đáp án đúng.',
      'Số_phiếu, tên_khách, tên_hàng, Số_lượng, đơn_giá.',
      'Số_phiếu, tên_khách, tên_hàng, Số_lượng, đơn_giá, thành_tiền.',
      'Số_phiếu, tên_khách, tên_hàng, Số_lượng, đơn_giá, địa_chỉ_khách, thành_tiền.'
    ],
    correctAnswer: 0 // đáp án a
  },
  {
    question: 'Câu 37: Nếu lớp Cây_ăn_quả và lớp Cây_bóng_mát gộp thành một lớp mới lấy tên là Cây. Lớp Cây có đầy đủ các tính chất cũng như thuộc tính của 2 lớp trên. Lớp Cây đã sử dụng tính chất:',
    options: ['Tổng quát hoá.', 'Chuyên biệt hóa.', 'Kế thừa và tổng quát hoá.', 'Kế thừa và chuyên biệt hóa', 'Không có đáp án đúng.'],
    correctAnswer: 0 // đáp án a
  },
  {
    question: 'Câu 38: Nếu lớp Cây được tạo thành từ các phương thức của lớp cây_ăn_quả và lớp Cây_bóng_mát thì Lớp Cây đã sử dụng tính chất của hướng đối tượng là:',
    options: ['Kế thừa.', 'Tổng quát hoá.', 'Nâng cấp.', 'Đa hình.'],
    correctAnswer: 0 // đáp án a
  },
  {
    question: 'Câu 39: Tính đóng gói được hiểu là:',
    options: [
      'Thuộc tính và phương thức luôn đi kèm với nhau.',
      'Đi với thuộc tính nào thì phải có phương thức đấy.',
      'Phương thức có thể không phụ thuộc vào thuộc tính.',
      'Thuộc tính phải nêu rõ thuộc tính đó thuộc kiểu giữ liệu gì.'
    ],
    correctAnswer: 0 // đáp án a
  },
  {
    question: 'Câu 40: Trong lược đồ ER, phát biểu không đúng về thực thể mạnh là:',
    options: [
      'Tồn tại độc lập với các kiểu thực thể khác.',
      'Có một định danh duy nhất.',
      'Là chủ sở hữu nếu có một kiểu thực thể yếu khác dựa vào nó.',
      'Thể hiện trên sơ đồ bằng hình chữ nhật cạnh đôi.'
    ],
    correctAnswer: 3 // đáp án d
  },

  {
    question: 'Câu 41: Trong lược đồ ER, phát biểu không đúng về thực thể yếu:',
    options: [
      'Tồn tại độc lập với các kiểu thực thể khác.',
      'Có một định danh duy nhất.',
      'Là chủ sở hữu nếu có một kiểu thực thể khác dựa vào nó.',
      'Thể hiện trên sơ đồ bằng hình chữ nhật cạnh đơn.',
      'Tất cả các ý trên'
    ],
    correctAnswer: 4 // e
  },
  {
    question: 'Câu 42: Trong lược đồ ER, phát biểu nào đúng về thực thể yếu:',
    options: [
      'Không thể tồn tại độc lập (1).',
      'Không có định danh cho bản thân (2).',
      'Thể hiện trên sơ đồ bằng hình chữ nhật cạnh đơn (3).',
      '(1) và (2).',
      '(2) và (3).'
    ],
    correctAnswer: 3 // d
  },
  {
    question: 'Câu 43: Mô hình dữ liệu là:',
    options: [
      'Là cách thức trong đó dữ liệu được lưu trữ tổ chức như một cấu trúc định sẵn với mục đích truy cập nhanh và hiệu quả trong quản lý.',
      'Là cách thức trong đó dữ liệu được mô tả dưới dạng bảng với các cấu trúc bảng, bộ, khóa. trường nhằm mục đích quản lý dữ liệu phục vụ truy cập nhanh.',
      'Là cách thức trong đó dữ liệu được mô tả dưới dạng các lớp dữ liệu với các khái niệm thuộc tính, phương thức, nhằm mục đích quản lý dữ liệu dưới dạng đối tuợng.',
      'Tất cả đều đúng.'
    ],
    correctAnswer: 0 // a
  },
  {
    question: 'Câu 44: Trong tuyên ngôn thứ nhất về hệ quản trị CSDL hướng đối tượng, tác giả đưa ra số lượng đặc trưng của hệ quản trị CSDL hướng đối tượng buộc phải có:',
    options: ['13.', '14.', '15.', '16.'],
    correctAnswer: 0 // a
  },
  {
    question: 'Câu 45: Trong tiêu chuẩn ODMG hỗ trợ bộ sưu tập các đối tượng, gồm:',
    options: ['3 loại.', '4 loại.', '5 loại.', '6 loại.'],
    correctAnswer: 2 // c
  },
  {
    question: 'Câu 46: Trong tuyên ngôn thế hệ thứ 3 của OODB ra đời vào năm:',
    options: ['1989', '1990', '1993', '1995'],
    correctAnswer: 1 // b
  },
  {
    question: 'Câu 47: Thành phần chính trong ODMG 3.0 là: .',
    options: ['Mô hình đối tượng.', 'Ngôn ngữ định nghĩa đối tượng.', 'Ngôn ngữ truy vấn đối tượng.', 'Liên kết ngôn ngữ.', 'Tất cả phương án đều đúng.'],
    correctAnswer: 4 // e
  },
  {
    question: 'Câu 48: So sánh sự tương ứng mô hình dữ liệu quan hệ với mô hình hướng đối tượng Class tương đương với:',
    options: ['Relation.', 'Tuple.', 'Column.', 'Store Procedure.'],
    correctAnswer: 0 // a
  },
  {
    question: 'Câu 49: So sánh sự tương ứng mô hình dữ liệu quan hệ với mô hình hướng đối tượng ObjectInstance tương đương với:',
    options: ['Relation.', 'Tuple.', 'Column.', 'Store Procedure.'],
    correctAnswer: 1 // b
  },
  {
    question: 'Câu 50: So sánh sự tương ứng mô hình dữ liệu quan hệ với mô hình hướng đối tượng Attributes tương đương với:',
    options: ['Relation.', 'Tuple.', 'Column.', 'Store Procedure.'],
    correctAnswer: 2 // c
  },
  {
    question: 'Câu 51: Có hai hướng phát triển thành CSDL hướng đối tượng đó là: .',
    options: [
      'Mở rộng ngôn ngữ lập trình sang CSDL hướng đối tượng và mở rộng mô hình quan hệ sang CSDL hướng đối tượng.',
      'Mở rộng ngôn ngữ lập trình sang CSDL hướng đối tượng và mở rộng mô hình mạng sang CSDL hướng đối tượng.',
      'Mở rộng ngôn ngữ lập trình sang CSDL hớng đối tượng và mở rộng mô hình kiến trúc dữ liệu sang CSDL hướng đối tượng.',
      'Không có phương án đúng.'
    ],
    correctAnswer: 0 // a
  },
  {
    question: 'Câu 52: Gemtone là một OODB được mở rộng theo hướng phát triển: .',
    options: ['Ngôn ngữ lập trình.', 'Mô hình quan hệ.', 'Mô hình mạng.', 'Mô hình kiến trúc mạng.'],
    correctAnswer: 0 // a
  },
  {
    question: 'Câu 53: INGRES là một OODB được mở rộng theo hướng phát triển từ:',
    options: ['Ngôn ngữ lập trình.', 'Mô hình quan hệ.', 'Mô hình mạng.', 'Mô hình kiến trúc mạng.'],
    correctAnswer: 1 // b
  },
  {
    question: 'Câu 54: ODL là ngôn ngữ đặc tả đối tượng phổ biến, có đặc điểm: .',
    options: [
      'Hỗ trợ tính khả chuyển của lược đồ CSDL (1).',
      'Hỗ trợ mọi cấu trúc ngữ nghĩa của mô hình đối tượng không cần theo chuẩn ODMG (2).',
      'Dùng để định nghĩa lược đồ lớp, các hoạt động và các trạng thái của tập các đối tượng trong CSDL(3).',
      'Dùng để xây dựng mô hình lớp, hành vi của đối tượng và duy trì tính toàn vẹn của CSDL (4).',
      '(1) và (2).',
      '(1) và (3).',
      '(1) và (4)'
    ],
    correctAnswer: 5 // f
  },
  {
    question: 'Câu 55: Trong ngôn ngữ định nghĩa đối tượng (ODL), từ khóa mô tả tên chung của các cá thể trong lớp đối tượng là:',
    options: ['extent + Tên.', 'extends + Tên.', 'exception + Tên.', 'explicit + Tên.'],
    correctAnswer: 0 // a
  },
  {
    question: 'Câu 56: OQL là ngôn ngữ truy vấn CSDL hướng đối tượng đã được đề xuất trong:',
    options: ['ODMG-93.', 'ODMG-95.', 'ODMG-92.', 'ODMG-99.'],
    correctAnswer: 0 // a
  },
  {
    question: 'Câu 57: OQL là ngôn ngữ truy vấn CSDL hướng đối tượng dựa trên: .',
    options: ['Mô hình đối tượng ODMG và SQL-92.', 'Mô hình đối tượng OM và chuẩn ODMG-93.', 'Mô hình lớp và ngôn ngữ truy vấn SQL.', 'Mô hình ORM và ngôn ngữ truy vấn hướng đối tượng.'],
    correctAnswer: 0 // a
  },
  {
    question: 'Câu 58: Mô hình EER là mô hình có khái niệm:',
    options: ['Tất cả khái niệm của mô hình ER.', 'Lớp con và lớp cha.', 'Tổng quát hóa và chuyên biệt hóa.', 'Của hướng đối tượng như: tính kế thừa.', 'Tất cả các ý trên.'],
    correctAnswer: 4 // e
  },
  {
    question: 'Câu 59: Mô hình ER là mô hình có khái niệm:',
    options: ['Tất cả khái niệm của mô hình EER.', 'Tổng quát hóa và chuyên biệt hóa.', 'Thuộc tính và thực thể.', 'Tất cả đều đúng.'],
    correctAnswer: 2 // c
  },
  {
    question: 'Câu 60: Trong mô hình EER, khái niệm chuyên biệt hóa nghĩa là: .',
    options: [
      'Quá trình định nghĩa một hoặc nhiều kiểu thực thể con của một kiểu thực thể cha và xác định các mối quan hệ cha con.',
      'Quá trình định nghĩa một kiểu thực thể chung từ một tập các kiểu thực thể chuyên biệt.',
      'Quá trình xác định một tập hợp lớp con của kiểu thực thể.',
      'Quá trình xác định một thể hiện của kiểu thực thể cha có thể đồng thời là thể hiện của nhiều hơn một kiểu thực thể con hay không.'
    ],
    correctAnswer: 0 // a
  },
  {
    question: 'Câu 61: Trong mô hình EER, khái niệm tổng quát hóa nghĩa là: .',
    options: [
      'Quá trình định nghĩa một hoặc nhiều kiểu thực thể con của một kiểu thực thể cha và xác định các mối quan hệ cha con.',
      'Quá trình định nghĩa một kiểu thực thể chung từ một tập các kiểu thực thể chuyên biệt.',
      'Quá trình xác định một tập hợp lớp con của kiểu thực thể.',
      'Quá trình xác định một thể hiện của kiểu thực thể cha có thể đồng thời là thể hiện của nhiều hơn một kiểu thực thể con hay không.'
    ],
    correctAnswer: 1 // b
  },
  {
    question: 'Câu 62: Trong mô hình EER, quá trình tổng quát hóa dùng cách thiết kế:',
    options: ['TOP-DOWN.', 'BOTTOM-UP.', 'INSIDE-OUT.', 'OUTSIDE-IN.'],
    correctAnswer: 1 // b
  },
  {
    question: 'Câu 63: Trong mô hình EER, quá trình chuyên biệt hóa dùng cách thiết kế:',
    options: ['TOP-DOWN.', 'BOTTOM-UP.', 'INSIDE-OUT.', 'OUTSIDE-IN.'],
    correctAnswer: 0 // a
  },
  {
    question: 'Câu 64: Trong mô hình thực thể liên kết (ER) để biểu diễn một thuộc tính dẫn xuất ta dùng ký hiệu:',
    options: ['Hình e-líp cạnh nét đơn.', 'Hình e-líp cạnh nét đôi.', 'Hình e-líp cạnh nét rời.', 'Không có thuộc tính này.'],
    correctAnswer: 2 // c
  },
  {
    question: 'Câu 65: Trong mô hình thực thể liên kết (ER) để biểu diễn một thuộc tính đa trị ta sử dụng: .',
    options: ['Hình e-líp cạnh nét đơn.', 'Hình e-líp cạnh nét đôi.', 'Hình e-líp cạnh nét rời.', 'Hình e-líp có đánh dấu.'],
    correctAnswer: 1 // b
  },
  {
    question: 'Câu 66: Chọn phương án ứng với thuộc tính đa trị :',
    options: ['Giới tính', 'Bằng cấp', 'Trình độ', 'Họ và tên'],
    correctAnswer: 1 // b
  },
  {
    question: 'Câu 67: Chọn phương án ứng với thuộc tính phức hợp :',
    options: ['Giới tính', 'Bằng cấp', 'Trình độ', 'Họ và tên'],
    correctAnswer: 3 // d
  },
  {
    question: 'Câu 68: Mỗi một thực thể chuyển thành một quan hệ. Là một bước trong việc chuyển đổi:',
    options: ['Mô hình thực tế sang mô hình thực thể.', 'Mô hình thực thể sang mô hình hướng đối tượng.', 'Mô hình quan hệ sang mô hình hướng đối tượng.', 'Mô hình thực thể sang mô hình quan hệ.'],
    correctAnswer: 3 // d
  },
  {
    question: 'Câu 69: Khi chuyển đổi mô hình ER sang mô hình quan hệ, ta thực hiện. Chọn đáp án đúng nhất:',
    options: [
      'Với mỗi thực thể E trong lược đồ ER chuyển thành một quan hệ R chứa mọi thuộc tính của E.',
      'Với mỗi thực thể E trong lược đồ ER chuyển thành một quan hệ R chứa mọi thuộc tính của E và các thuộc tính trong mối quan hệ liên quan đến thực thể E đó.',
      'Với mỗi thực thể E trong lược đồ ER chuyển thành một quan hệ R nhưng chỉ lấy thuộc tính định danh và đa trị của thực thể E đó.',
      'Với mỗi thực thể E trong lợc đồ ER chuyển thành một quan hệ R chứa mọi thuộc tính của E và thuộc tính định danh của quan hệ liên quan đến thực thể đó.'
    ],
    correctAnswer: 0 // a
  },
  {
    question: 'Câu 70: Trong chuyển đổi mô hình ER sang mô hình quan hệ, ta thực hiện. Chọn đáp án đúng nhất: .',
    options: [
      'Với mỗi kiểu thực thể E trong lược đồ ER tạo ra một quan hệ R chứa mọi thuộc tính đơn của E. Với các thuộc tính phức hợp, chỉ lấy các thuộc tính thành phần đơn của nó. Chọn một trong các thuộc tính khóa của E làm khóa chính cho R.',
      'Thuộc tính định danh cuả các thực thể E trong ER được chuyển thành thuộc tính khoá trong quan hệ R.',
      'Thuộc tính phức hợp trong E không được đưa vào quan hệ R.',
      'Với mỗi kiểu liên kết hai ngôi R kiểu 1: N, hãy xác định quan hệ S biểu diễn kiểu thực thể tham gia ở phía N của kiểu liên kết. Đưa khóa chính của quan hệ T biểu diễn kiểu thực thể tham gia vào R ở phía 1 vào làm khóa ngoài trong S.'
    ],
    correctAnswer: 1 // b
  },
  {
    question: 'Câu 71: Mô hình ER (hình trên) có mấy mối quan hệ sở hữu, phụ thuộc:',
    options: ['2.', '3.', '1.', '4.'],
    correctAnswer: 2, // c
    image: 'images/hinh2.png'
  },
  {
    question: 'Câu 72: Trong mô hình ER trên. Thuộc tính nào là phức hợp:',
    options: ['giám sát.', 'làm việc cho.', 'địa điểm.', 'họ tên.'],
    correctAnswer: 3, // d
    image: 'images/hinh2.png'
  },
  {
    question: 'Câu 73: Để chuyển đổi thuộc tính đa trị từ mô hình ER sang mô hình hướng đối tượng ta thực hiện: .',
    options: ['Mỗi một thuộc tính đa trị thành một lớp mới.', 'Các thuộc tính đa trị trong ER thành một lớp mới.', 'Giữ nguyên không cần thay đổi gì..', 'Tất cả đều đúng.'],
    correctAnswer: 0 // a
  },
  {
    question: 'Câu 74: Để chuyển đổi thuộc tính phức hợp trong mô hình ER sang mô hình hướng đối tượng, ta thực hiện: .',
    options: ['Chuyển thành một lớp mới.', 'Chuyển đổi thuộc tính đa trị.', 'Chuyển thành mối liên kết .', 'Tất cả đều sai.'],
    correctAnswer: 3 // d
  },
  {
    question: 'Câu 75: Chuyển đổi mỗi một thuộc tính đa trị của một thực thể thành một quan hệ mới . Là một bước trong việc chuyển đổi: .',
    options: ['Chuyển đổi mối quan hệ N: M.', 'Chuyển đổi thuộc tính đa trị.', 'Với kiểu liên kết n ngôi R.', 'Tất cả đều đúng.'],
    correctAnswer: 1 // b
  },
  {
    question: 'Câu 76: Chuyển đổi từ mô hình ER sang mô hình Quan hệ ta được các quan hệ:',
    options: ['Nhân Viên, Đơn Vị, Con, Dự án, Quản Lý, Làm việc cho, Kiểm .', 'Quản lý, Nhân viên, Đơn vị, Con, Dự án.', 'Nhân viên, Đơn vị, Con, Dự án.', 'Tất cả đều sai.'],
    correctAnswer: 2, // c
    image: 'images/hinh1.png'
  },
  {
    question: 'Câu 77: Chuyển đổi từ mô hình ER sang mô hình quan hệ . Việc chuyển đổi mối liên kết là chuyển đổi mối liên kết: .',
    options: ['N: 1.', '1: N.', '1: 1.', 'Tất cả đều đúng.'],
    correctAnswer: 3 // d
  },
  {
    question: 'Câu78: Hình trên mối quan hệ nào chứa thuộc tính riêng của quan hệ:',
    options: ['Quản lý.', 'Làm việc.', 'Kiểm.', 'Có.'],
    correctAnswer: 0, // a
    image: 'images/hinh2.png'
  },
  {
    question: 'Câu 79: Hình trên, khi chuyển đổi từ mô hình ER sang mô hình quan hệ, các mối quan hệ nào sẽ được chuyển đổi bằng cách lấy khoá chính của quan hệ này đưa vào quan hệ kia làm khoá liên kết ?',
    options: ['Làm việc cho.', 'Giám sát.', 'Kiểm.', 'Tất cả các phương án trên.'],
    correctAnswer: 3, // d
    image: 'images/hinh2.png'
  },
  {
    question: 'Câu 80: Chuyển đổi từ mô hình ER sang mô hình quan hệ hãy cho biết các mối quan hệ nào trong lược đồ ER trên sẽ được chuyển đổi thành một quan hệ mới:',
    options: ['Làm việc.', 'Làm việc cho.', 'Kiểm.', 'Tất cả các phương án trên.'],
    correctAnswer: 0, // a
    image: 'images/hinh2.png'
  },
  {
    question: 'Câu 81: Chuyển đổi từ mô hình ER sang mô hình quan hệ hãy cho biết các mối quan hệ nào trong lược đồ ER trên sẽ được chuyển đổi thành một quan hệ mới:',
    options: ['giám sát.', 'Làm việc cho.', 'Kiểm.', 'Tất cả các phương án trên đều sai.'],
    correctAnswer: 3, // d
    image: 'images/hinh2.png'
  },
  {
    question: 'Câu 82: Trong lược đồ ER Công Ty trên cho biết thuộc tính nào là thuộc tính đa trị?',
    options: ['Địa điểm.', 'Họ tên.', 'Con.', 'Giới tính.'],
    correctAnswer: 0, // a (giả định)
    image: 'images/hinh2.png'
  },
  {
    question: 'Câu 83: Trong lược đồ ER Công Ty trên cho biết thuộc tính nào là thuộc tính phức?',
    options: ['Địa điểm.', 'Họ tên.', 'Con.', 'Giới tính.'],
    correctAnswer: 2, // c
    image: 'images/hinh2.png'
  },
  {
    question: 'Câu 84: Trong lược đồ ER Công Ty trên cho biết quan hệ nào là quan hệ tham gia vào 3 mối liên kết trở lên?',
    options: ['Con.', 'Nhân viên.', 'Dự án.', 'Đơn vị.'],
    correctAnswer: 2, // c
    image: 'images/hinh2.png'
  },
  {
    question: 'Câu85: Khi chuyển đổi từ mô hình ER sang mô hình quan hệ tại bước thứ nhất ta được quan hệ Nhân viên (Mã số, Họ đệm, Tên, Ngày sinh, Giới tính, Lương, Địa chỉ). Nếu thực tiếp bước thứ hai ta được quan hệ Nhân viên gồm các thuộc tính sau:',
    options: [
      'Không có gì thay đổi.',
      'Nhân viên (Mã số, Họ đệm, Tên, Ngày sinh, Giới tính, Lơng, Địa chỉ, Con).',
      'Nhân viên (Mã số, Họ đệm, Tên, Ngày sinh, Giới tính, Lơng, Địa chỉ, Ngời quản lý).',
      'Tất cả đều sai.'
    ],
    correctAnswer: 0, // a
    image: 'images/hinh2.png'
  },
  {
    question: 'Câu 86: Khi chuyển đổi từ mô hình ER sang mô hình quan hệ tại bước thứ hai ta được quan hệ Nhân viên (Mã số, Họ đệm, Tên, Ngày sinh, Giới tính, Lơng, Địa chỉ). Nếu chuyển đổi sang mô hình hướng đối tượng thì quan hệ nhân viên gồm các thuộc tính:',
    options: [
      'Không có gì thay đổi.',
      'Nhân viên (Mã số, Họ đệm, Tên, Ngày sinh, Giới tính, Lơng, Địa chỉ, Ngời giám sát).',
      'Nhân viên (Mã số, Họ đệm, Tên, Ngày sinh, Giới tính, Lơng, Địa chỉ, Ngời quản lý).',
      'Tất cả đều sai.'
    ],
    correctAnswer: 0, // a
    image: 'images/hinh2.png'
  },
  {
    question: 'Câu 87: Khi chuyển đổi từ mô hình ER sang mô hình quan hệ. Để chuyển đối mối quan hệ làm việc cho đối với quan hệ Nhân viên (Mã số, Họ đệm, Tên, Ngày sinh, Giới tính, Lương, Địa chỉ, Người giám sát). Ta được quan hệ Nhân viên mới gồm thuộc tính :',
    options: [
      'Không có gì thay đổi.',
      'Nhân viên (Mã số, Họ đệm, Tên, Ngày sinh, Giới tính, Lương, Địa chỉ, Người giám sát, Mã đơn vị).',
      'Nhân viên (Mã số, Họ đệm, Tên, Ngày sinh, Giới tính, Lương, Địa chỉ, Người quản lý, Người giám sát).',
      'Tất cả đều sai'
    ],
    correctAnswer: 1, // b
    image: 'images/hinh2.png'
  },
  {
    question: 'Câu 88: Khi chuyển đổi từ mô hình ER sang mô hình quan hệ. Để chuyển đổi hai mối liên kết là Kiêm và làm việc cho của quan hệ Dự án (Mã số, Tên, Địa điểm), ta được quan hệ Dự án gồm các thuộc tính sau:',
    options: ['Không có gì thay đổi.', 'Dự án(Mã số, Tên, Địa điểm, Mã đơn vị).', 'Dự án(Mã số, tên, Địa điểm, Mã đơn vị, Mã nhân viên).', 'Tất cả đều sai.'],
    correctAnswer: 1, // b
    image: 'images/hinh2.png'
  },
  {
    question: 'Câu 89: Khi chuyển đổi từ mô hình ER sang mô hình quan hệ . Để chuyển đổi môí quan hệ Kiêm đối với quan hệ Đơnvi (Mã số, Tên, Địa điểm) ta được quan hệ Đơn vị mới gồm các thuộc tính sau:',
    options: ['Không có gì thay đổi.', 'Đơn vị(Mã số, Tên, Địa điểm, Mã dự án).', 'Đơn vị(Mã số, tên, Địa điểm, Mã dự án, Mã nhân viên).', 'Tất cả đều sai.'],
    correctAnswer: 1, // b
    image: 'images/hinh2.png'
  },
  {
    question: 'Câu 90: Khi chuyển đổi từ mô hình ER sang mô hình quan hệ tại bước thứ hai ta được quan hệ Đơn vị (Mã số, Tên, Địa điểm). Nếu thực hiện tiếp bước thứ ba ta được quan hệ Đơn vị gồm các thuộc tính sau:',
    options: ['Không có gì thay đổi.', 'Đơn vị(Mã số, Tên, Địa điểm, Ngời quản lý).', 'Đơn vị(Mã số, tên, Địa điểm, Mã dự án, Mã nhân viên).', 'Tất cả đều sai.'],
    correctAnswer: 1, // b
    image: 'images/hinh2.png'
  },
  {
    question: 'Câu 91: Khi chuyển đổi từ mô hình ER sang mô hình quan hệ tại bước thứ ba ta được quan hệ Đơn vị (Mã số, Tên, Địa điểm, Ngời quản lý). Nếu thực hiện tiếp bước thứ tư ta được quan hệ Đơn vị gồm các thuộc tính sau:',
    options: ['Không có gì thay đổi.', 'Đơn vị(Mã số, Tên, Địa điểm).', 'Đơn vị(Mã số, tên, Địa điểm, Mã dự án, Mã nhân viên).', 'Tất cả đều sai.'],
    correctAnswer: 0, // a
    image: 'images/hinh2.png'
  },
  {
    question: 'Câu 92: Trong mô hình thực thể liên kết, thuộc tính đơn nghĩa là: .',
    options: ['Thuộc tính có kiểu dữ liệu nguyên tố.', 'Thuộc tính có giá trị duy nhất cho một thực thể.', 'Thuộc tính có giá trị được lưu duy nhất một lần.', 'Thuộc tính có thể có nhiều giá trị đơn giản để mô tả.'],
    correctAnswer: 0 // a
  },
  {
    question: 'Câu 93: Trong mô hình thực thể liên kết, thuộc tính phức hợp nghĩa là: .',
    options: ['Thuộc tính không thể phân chia được thành các thành phần nhỏ hơn.', 'Thuộc tính có giá trị duy nhất cho một thực thể.', 'Không có phương án đúng.', 'Thuộc tính có thể có một tập giá trị cho cùng một thực thể.'],
    correctAnswer: 2 // c
  },
  {
    question: 'Câu 94: Trong mô hình thực thể liên kết, thuộc tính đa trị nghĩa là: .',
    options: ['Thuộc tính không thể phân chia đợc thành các thành phần nhỏ hơn.', 'Thuộc tính có giá trị duy nhất cho một thực thể cụ thể.', 'Thuộc tính có kiểu tổ hợp từ nhiều thuộc tính khác.', 'Thuộc tính có một tập hợp các giá trị cho cùng một thực thể.'],
    correctAnswer: 3 // d
  },
  {
    question: 'Câu 95: Cho mô tả bài toán bệnh viện... Hãy cho biết các kiểu thực thể có trong bài toán trên?.',
    options: ['Bác Sĩ, Chuyên khoa. Bệnh nhân.', 'Bênh viện, Bác sĩ, Chuyên khoa. Bệnh nhân, Liệu pháp điều trị.', 'Không có phương án đúng.', 'Bác sĩ, Khoa. Bệnh nhân.'],
    correctAnswer: 0 // a
  },
  {
    question: 'Câu 96: ... Hãy cho biết các mối quan hệ có trong bài toán trên?.',
    options: ['Bác sĩ có Chuyên khoa.', 'Bác sĩ Theo dõi Bệnh nhân.', 'Bác sĩ điều trị Bệnh nhân.', 'Tất cả đều đúng.'],
    correctAnswer: 3 // d
  },
  {
    question: 'Câu 97: ... Hãy chỉ ra quan hệ có thuộc tính đi kèm?.',
    options: ['Bác sĩ có Chuyên khoa.', 'Bác sĩ Theo dõi Bệnh nhân.', 'Bác sĩ điều trị Bệnh nhân.', 'Tất cả đều đúng.'],
    correctAnswer: 2 // c
  },
  {
    question: 'Câu 98: ... Hãy chỉ ra quan hệ n phân trong bài toán trên?.',
    options: ['Bác sĩ có Chuyên khoa.', 'Bác sĩ Theo dõi Bệnh nhân.', 'Bác sĩ điều trị Bệnh nhân.', 'Không có phơng án đúng.'],
    correctAnswer: 3 // d
  },
  {
    question: 'Câu 99: Trong mô hình đối tượng ODMG bộ sưu tập các đối tượng là: .',
    options: ['Set, Bag, List, Array, Dictionary.', 'Set, Tuple, Bag, List, Dictionary.', 'Set, Bag, List, Record, Tuple.', 'Set, List, Bag, Array, Tuple.', 'Tất cả các ý trên.'],
    correctAnswer: 0 // a
  },
  {
    question: 'Câu 100: Thuộc tính đa trị trong lược đồ hướng đối tượng được xác định với từ khóa:',
    options: ['Set', 'Union', 'Get', 'Không có phương án đúng'],
    correctAnswer: 0 // a
  },

  {
    question: 'Câu 101: Từ khóa Set chỉ ra rằng bộ các đối tượng yêu cầu: .',
    options: [
      'Không sắp xếp, không được trùng nhau.',
      'Không sắp xếp, được trùng nhau.',
      'Được sắp xếp, được thêm các phần tử.',
      'Được sắp xếp, được thay thế các phần tử.',
      'Không sắp xếp các cặp <khóa, giá trị>'
    ],
    correctAnswer: 0 // đáp án a
  },
  {
    question: 'Câu 102: Từ khóa Bag chỉ ra rằng bộ các đối tượng yêu cầu: .',
    options: [
      'Không sắp xếp, không được trùng nhau.',
      'Không sắp xếp, được trùng nhau.',
      'Được sắp xếp, được thêm các phần tử.',
      'Được sắp xếp, được thay thế các phần tử.',
      'Không sắp xếp các cặp <khóa, giá trị>'
    ],
    correctAnswer: 1 // đáp án b
  },
  {
    question: 'Câu 103: Từ khóa List chỉ ra rằng bộ các đối tượng yêu cầu: .',
    options: [
      'Không sắp xếp, không được trùng nhau.',
      'Không sắp xếp, được trùng nhau.',
      'Được sắp xếp, được thêm các phần tử.',
      'Được sắp xếp, được thay thế các phần tử.',
      'Không sắp xếp các cặp <khóa, giá trị>'
    ],
    correctAnswer: 2 // đáp án c
  },
  {
    question: 'Câu 104: Từ khóa Array chỉ ra rằng bộ các đối tượng yêu cầu: .',
    options: [
      'Không sắp xếp, không được trùng nhau.',
      'Không sắp xếp, được trùng nhau.',
      'Được sắp xếp, được thêm các phần tử.',
      'Được sắp xếp, được thay thế các phần tử.',
      'Không sắp xếp các cặp <khóa, giá trị>'
    ],
    correctAnswer: 3 // đáp án d
  },
  {
    question: 'Câu 105: Chuyển đổi từ mô hình ER sang mô hình hướng đối tượng gồm mấy quy tắc chuyển đổi: .',
    options: ['3.', '4.', '5.', '6.'],
    correctAnswer: 2 // đáp án c
  },
  {
    question: 'Câu 106: Quy tắc chuyển đổi thứ nhất từ mô hình ER sang mô hình hớng đối tượng là : .',
    options: [
      'Chuyển đổi mối quan hệ is-a.',
      'Chuyển đổi mỗi quan hệ 1: 1.',
      'Chuyển đối mối quan hệ 1: n.',
      'Chuyển đối mối quan hệ n: m.'
    ],
    correctAnswer: 0 // đáp án a
  },
  {
    question: 'Câu 107: Quy tắc chuyển đổi thứ hai từ mô hình ER sang mô hình hớng đối tợng là : .',
    options: [
      'Chuyển đổi mối quan hệ is-a.',
      'Chuyển đổi mỗi quan hệ 1: 1.',
      'Chuyển đối mối quan hệ 1: n.',
      'Không có phương án đúng.'
    ],
    correctAnswer: 3 // đáp án d
  },
  {
    question: 'Câu 108: Quy tắc chuyển đổi thứ hai từ mô hình ER sang mô hình hướng đối tượng là : .',
    options: [
      'Chuyển đổi mối quan hệ nhị nguyên is-a (is-an)',
      'Chuyển đổi mối quan hệ nhị nguyên không thuộc tính.',
      'Chuyển đối mối quan hệ nhị nguyên có kèm thuộc tính.',
      'Không có phương án đúng.'
    ],
    correctAnswer: 1 // đáp án b
  },
  {
    question: 'Câu 109: Quan hệ nhị nguyên không thuộc tính là : .',
    options: [
      'Quan hệ gồm ít nhất hai thực thể tham gia và không phát sinh thuộc tính khi xảy ra mối quan hệ.',
      'Quan hệ phải có hai thực thể tham gia và không phát sinh thuộc tính khi xảy ra mối quan hệ.',
      'Quan hệ có nhiều nhất hai thực thể tham gia và không phát sinh thuộc tính khi xảy ra mối quan hệ.',
      'Không có phương án đúng.'
    ],
    correctAnswer: 1 // đáp án b
  },
  {
    question: 'Câu 110: Quy tắc chuyển đổi thứ ba từ mô hình ER sang mô hình hướng đối tượng là :',
    options: [
      'Chuyển đổi mối quan hệ nhị nguyên is-a (is-an)',
      'Chuyển đổi mỗi quan hệ nhị nguyên không thuộc tính.',
      'Chuyển đối mối quan hệ nhị nguyên có kèm thuộc tính.',
      'Chuyển đổi mối quan hệ nhị nguyên phản xạ.',
      'Không có phương án đúng.'
    ],
    correctAnswer: 2 // đáp án c
  },
  {
    question: 'Câu 111: Quy tắc chuyển đổi thứ tư từ mô hình ER sang mô hình hướng đối tượng là :',
    options: [
      'Chuyển đổi mối quan hệ is-a (is-an)',
      'Chuyển đổi mỗi quan hệ không thuộc tính.',
      'Chuyển đối mối quan hệ có kèm thuộc tính.',
      'Chuyển đổi mối quan hệ phản xạ.',
      'Không có phương án đúng.'
    ],
    correctAnswer: 3 // đáp án d
  },
  {
    question: 'Câu 112: Quy tắc chuyển đổi thứ năm từ mô hình ER sang mô hình hướng đối tượng là : .',
    options: [
      'Chuyển đổi mối quan hệ nhị nguyên is-a (is-an)',
      'Chuyển đổi mỗi quan hệ nhị nguyên không thuộc tính.',
      'Chuyển đối mối quan hệ nhị nguyên có kèm thuộc tính.',
      'Chuyển đổi mối quan hệ nhị nguyên phản xạ.',
      'Không có phương án đúng.'
    ],
    correctAnswer: 4 // đáp án e
  },
  {
    question: 'Câu 113: Quy tắc chuyển đổi thứ năm từ mô hình ER sang mô hình hướng đối tượng là : .',
    options: [
      'Chuyển đổi mối quan hệ is-a (is-an).',
      'Chuyển đổi mối quan hệ đa nguyên.',
      'Chuyển đối mối quan hệ phản xạ.',
      'Chuyển đổi mối quan hê nhị nguyên.',
      'Không có phương án đúng.'
    ],
    correctAnswer: 1 // đáp án b
  },
  {
    question: 'Câu 114: Nội dung của quy tắc chuyển đổi thứ nhất từ mô hình ER sang mô hình hướng đối tượng là : .',
    options: [
      'Nếu tập thực thể A là có mối quan hệ is-a với tập thực thể B thì lớp A sẽ kế thừa tất cả các thuộc tính trong lớp B, đồng thời bổ sung các thuộc tính riêng của lớp A. Đây chính là tính kế thừa trong mô hình dữ liệu hướng đối tượng.',
      'Nếu hai tập thực thể A và B có mối quan hệ R (R không có thuộc tính), thì mỗi lớp A và B, ngoài các thuộc tính trong tập thực thể A và B, sẽ được bổ sung thêm thuộc tính R ( gọi là thuộc tính mối quan hệ ).',
      'Xét một tập thực thể A có mối quan hệ R vào chính tập A. Nếu thông qua R mỗi đối tượng thuộc lớp A có quan hệ nhiều nhất với một đối tượng thuộc lớp A thì thuộc tính R trong lớp A sẽ được khai báo: <Tên thuộc tính R>: <Lớp A>. Trong trường hợp mỗi đối tượng thuộc lớp A có thể quan hệ với nhiều đối tượng thuộc lớp A. thì thuộc tính R có khai báo: <Tên thuộc tính R>: set(<Lớp A>).',
      'Không có phương án đúng.'
    ],
    correctAnswer: 0 // đáp án a
  },
  {
    question: 'Câu 115: Nội dung của quy tắc chuyển đổi thứ hai từ mô hình ER sang mô hình hướng đối tượng là : .',
    options: [
      'Nếu tập thực thể A là có mối quan hệ is-a với tập thực thể B thì lớp A sẽ kế thừa tất cả các thuộc tính trong lớp B, đồng thời bổ sung các thuộc tính riêng của lớp A. Đây chính là tính kế thừa trong mô hình dữ liệu hướng đối tượng.',
      'Nếu hai tập thực thể A và B có mối quan hệ R (R không có thuộc tính), thì mỗi lớp A và B, ngoài các thuộc tính trong tập thực thể A và B, sẽ được bổ sung thêm thuộc tính R ( gọi là thuộc tính mối quan hệ ).',
      'Xét một tập thực thể A có mối quan hệ R vào chính tập A. Nếu thông qua R mỗi đối tượng thuộc lớp A có quan hệ nhiều nhất với một đối tượng thuộc lớp A thì thuộc tính R trong lớp A sẽ đợc khai báo: <Tên thuộc tính R>: <Lớp A>. Trong trường hợp mỗi đối tượng thuộc lớp A có thể quan hệ với nhiều đối tượng thuộc lớp A. thì thuộc tính R có khai báo: <Tên thuộc tính R>: set(<Lớp A>).',
      'Không có phương án đúng.'
    ],
    correctAnswer: 1 // đáp án b
  },
  {
    question: 'Câu 116: Nội dung của quy tắc chuyển đổi thứ ba từ mô hình ER sang mô hình hướng đối tượng là : .',
    options: [
      'Nếu tập thực thể A là có mối quan hệ is-a với tập thực thể B thì lớp A sẽ kế thừa tất cả các thuộc tính trong lớp B, đồng thời bổ sung các thuộc tính riêng của lớp A. Đây chính là tính kế thừa trong mô hình dữ liệu hướng đối tượng.',
      'Nếu hai tập thực thể A và B có mối quan hệ R (R không có thuộc tính), thì mỗi lớp A và B, ngoài các thuộc tính trong tập thực thể A và B, sẽ được bổ sung thêm thuộc tính R ( gọi là thuộc tính mối quan hệ ).',
      'Xét một tập thực thể A có mối quan hệ R vào chính tập A. Nếu thông qua R mỗi đối tượng thuộc lớp A có quan hệ nhiều nhất với một đối tượng thuộc lớp A thì thuộc tính R trong lớp A sẽ đợc khai báo: <Tên thuộc tính R>: <Lớp A>. Trong trường hợp mỗi đối tượng thuộc lớp A có thể quan hệ với nhiều đối tượng thuộc lớp a. thì thuộc tính R có khai báo: <Tên thuộc tính R>: set(<Lớp A>).',
      'Không có phương án đúng.'
    ],
    correctAnswer: 2 // đáp án c
  },
  {
    question: 'Câu 117: Cho lược đồ ER trên ta phải áp dụng quy tắc số mấy để chuyển mối quan hệ is-a sang mô hình hướng đối tượng',
    options: ['Quy tắc số 1.', 'Quy tắc số 2.', 'Quy tắc số 3.', 'Quy tắc số 4.'],
    correctAnswer: 0, // đáp án a
    image: 'images/hinh3.png'
  },
  {
    question: 'Câu 118: Cho lược đồ ER trên sau khi áp dụng quy tắc chuyển đổi mô hình ER sang mô hình hướng đối tượng ta sẽ được kết quả : .',
    options: [
      'Tại lớp Nhân viên sẽ có thêm thuộc tính inherits: Nguoi.',
      'Không có gì thay đổi ở lược đồ hai lớp.',
      'Tại lớp Nguoi có thêm thuộc tính inherits: Nhân viên.',
      'Tại lớp Nhân viên sẽ có thêm thuộc tính inherits: Nguoi và tại lớp Nguoi có thêm thuộc tính inherits: Nhân viên.'
    ],
    correctAnswer: 0, // đáp án a
    image: 'images/hinh3.png'
  },
  {
    question: 'Câu 119: Cho lược đồ ER trên sau khi áp dụng quy tắc số mấy để chuyển mối quan hệ quanly sang mô hình hướng đối tượng : .',
    options: ['Quy tắc số 1.', 'Quy tắc số 2.', 'Quy tắc số 3.', 'Quy tắc số 4.'],
    correctAnswer: 1, // đáp án b
    image: 'images/hinh4.png'
  },
  {
    question: 'Câu 120: Cho lược đồ ER trên sau khi áp dụng quy tắc chuyển đổi mô hình ER sang mô hình hướng đối tượng ta sẽ được kết quả : .',
    options: [
      'Tại lớp Trởng khoa sẽ có thêm thuộc tính quanly: Khoa.',
      'Không có gì thay đổi ở lợc đồ hai lớp.',
      'Tại lớp Khoa có thêm thuộc tính quanly: Truongkhoa.',
      'Tại lớp Trưởng khoa có thêm thuộc tính quanly: Khoa và tại lớp Khoa có thêm thuộc tính quanly: Truongkhoa.'
    ],
    correctAnswer: 3, // đáp án d
    image: 'images/hinh4.png'
  },
  {
    question: 'Câu121: Cho lược đồ ER trên sau khi áp dụng quy tắc số mấy để chuyển mối quan hệ quanly sang mô hình hướng đối tượng : .',
    options: ['Quy tắc số 1.', 'Quy tắc số 2.', 'Quy tắc số 3.', 'Quy tắc số 4.'],
    correctAnswer: 1, // đáp án b
    image: 'images/hinh4.png'
  },
  {
    question: 'Câu 122: Cho lược đồ ER trên sau khi áp dụng quy tắc chuyển đổi mô hình ER sang mô hình hướng đối tượng ta sẽ được kết quả : .',
    options: [
      'Tại lớp Giáo viên sẽ có thêm thuộc tính Thuoc: Khoa.',
      'Tại lớp Giáo viên sẽ có thêm thuộc tính Thuoc: set(Khoa) và tại lớp Khoa có thêm thuộc tính Thuoc: set(Giaovien)..',
      'Tại lớp Khoa có thêm thuộc tính Thuoc: set(Giaovien).',
      'Tại lớp Giáo viên sẽ có thêm thuộc tính Thuoc: Khoa và tại lớp Khoa có thêm thuộc tính Thuoc: set(Giaovien).'
    ],
    correctAnswer: 3, // đáp án d
    image: 'images/hinh4.png'
  },
  {
    question: 'Câu 123: Cho lược đồ ER trên sau khi áp dụng quy tắc chuyển đổi mô hình ER sang mô hình hớng đối tượng ta sẽ được kết quả : .',
    options: [
      'Tại lớp Giáo viên sẽ có thêm thuộc tính Thuoc: set(Khoa).',
      'Tại lớp Giáo viên sẽ có thêm thuộc tính Thuoc: set(Khoa) và tại lớp Khoa có thêm thuộc tính Thuoc: set(Giaovien).',
      'Tại lớp Khoa có thêm thuộc tính Thuoc: set(Giaovien).',
      'Tại lớp Giáo viên sẽ có thêm thuộc tính Thuoc: Khoa và tại lớp Khoa có thêm thuộc tính Thuoc: (Giaovien).',
      'Không có phương án đúng.'
    ],
    correctAnswer: 4, // đáp án e
    image: 'images/hinh4.png'
  },
  {
    question: 'Câu 124: Cho lược đồ ER trên sau khi áp dụng quy tắc số mấy để chuyển mối quan hệ quanly sang mô hình hướng đối tượng : .',
    options: ['Quy tắc số 1.', 'Quy tắc số 2.', 'Quy tắc số 3.', 'Quy tắc số 4.'],
    correctAnswer: 1, // đáp án b
    image: 'images/hinh5.png'
  },
  {
    question: 'Câu 125: Cho lược đồ ER trên sau khi áp dụng quy tắc chuyển đổi mô hình ER sang mô hình hướng đối tượng ta sẽ được kết quả : .',
    options: [
      'Tại lớp Giáo viên sẽ có thêm thuộc tính Giang: set(Mon).',
      'Tại lớp Giáo viên sẽ có thêm thuộc tính Giang: set(Mon) và tại lớp Mon có thêm thuộc tính Giang: Set(Giaovien).',
      'Tại lớp Mon có thêm thuộc tính Giang: set(Giaovien).',
      'Tại lớp Giáo viên sẽ có thêm thuộc tính Thuoc: Khoa và tại lớp Khoa có thêm thuộc tính Thuoc: (Giaovien).',
      'Không có phương án đúng.'
    ],
    correctAnswer: 1, // đáp án b
    image: 'images/hinh5.png'
  },
  {
    question: 'Câu 126: Cho lược đồ ER trên sau khi áp dụng quy tắc số mấy để chuyển mối quan hệ phản xạ sang mô hình hướng đối tượng : .',
    options: ['Quy tắc số 1.', 'Quy tắc số 2.', 'Quy tắc số 3.', 'Quy tắc số 4.'],
    correctAnswer: 2 // đáp án c
  },
  {
    question: 'Câu 127: Cho lược đồ ER trên sau khi áp dụng quy tắc chuyển đổi mô hình ER sang mô hình hướng đối tượng ta sẽ được kết quả : .',
    options: [
      'Tại lớp Giáo viên sẽ có thêm thuộc tính Giang1: set(Gvien_Khoa).',
      'Tại lớp Giáo viên sẽ có thêm thuộc tính Giang1: set(Gvien_Khoa) và tại lớp Khoa có thêm thuộc tính Giang2: Set(Gvien_Khoa).',
      'Tại lớp Khoa có thêm thuộc tính Giang2: set(Gvien_Khoa).',
      'Tại lớp Giáo viên sẽ có thêm thuộc tính Giang1: set(Gvien_Khoa) và tại lớp Khoa có thêm thuộc tính Giang2: Set(Gvien_Khoa). Và lớp Gvien_Khoa sẽ có thuộc tính là( ID_gvien_khoa: AllID, Giang1: Giaovien, Giang2: Khoa. tongsotiet: integer).',
      'Không có phương án đúng.'
    ],
    correctAnswer: 3, // đáp án d
    image: 'images/hinh6.png'
  },
  {
    question: 'Câu 128: Cho lược đồ ER trên sau khi áp dụng quy tắc số mấy để chuyển mối quan hệ Giảng sang mô hình hướng đối tượng : .',
    options: ['Quy tắc số 1.', 'Quy tắc số 2.', 'Quy tắc số 3.', 'Quy tắc số 4.'],
    correctAnswer: 3, // đáp án d
    image: 'images/hinh6.png'
  },
  {
    question: 'Câu 129: Cho lược đồ ER trên, tên các thực thể có trong lược đồ là : .',
    options: [
      'Giaovien, Giang, Khoa.',
      'Giaovien, Khoa.',
      'Giaovien, Khoa. Tongsotiet, Giang.',
      'Không có phương án nào đúng.'
    ],
    correctAnswer: 1, // đáp án b
    image: 'images/hinh6.png'
  },
  {
    question: 'Câu 130: Cho lược đồ ER trên, Tongsotiet được gọi là : .',
    options: [
      'Thuộc tính của liên kết Giang.',
      'Thuộc tính của kiểu thực thể Khoa và Giáo viên.',
      'Thuộc tính không thể sử dụng.',
      'Không có phương án nào đúng.'
    ],
    correctAnswer: 0, // đáp án a
    image: 'images/hinh6.png'
  },
  {
    question: 'Câu 131: Cho lược đồ ER trên, sau khi chuyển đổi từ mô hình ER sang mô hình quan hệ ta sẽ được những quan hệ nào : .',
    options: [
      'Quan hệ: Giáo viên, Khoa. Gvien_Khoa (sinh ra do liên kết Giang).',
      'Quan hệ: Giáo viên, Khoa.',
      'Không thể chuyển đổi mô hình sang mô hình quan hệ.',
      'Không có phương án nào đúng.'
    ],
    correctAnswer: 0, // đáp án a
    image: 'images/hinh6.png'
  },
  {
    question: 'Câu 132: Cho lược đồ ER trên, để chuyển đổi liên kết Giảng sang mô hình quan hệ ta phải thực hiện bước chuyển đổi thứ : .',
    options: ['3.', '4.', '5.', '6.'],
    correctAnswer: 2, // đáp án c
    image: 'images/hinh6.png'
  },
  {
    question: 'Câu 133: Cho lược đồ ER trên, để chuyển đổi liên kết Thuộc sang mô hình quan hệ ta phải thực hiện bước chuyển đổi thứ : .',
    options: ['3.', '4.', '5.', '6.'],
    correctAnswer: 1, // đáp án b
    image: 'images/hinh7.png'
  },
  {
    question: 'Câu 134: Cho lược đồ ER trên, chuyển đổi lược đồ sang mô hình quan hệ ta được các quan hệ : .',
    options: [
      'Giáo viên, Giáo viên_thuộc_Khoa. Khoa.',
      'Khoa. Giáo viên.',
      'Khoa.',
      'Giáo viên.'
    ],
    correctAnswer: 0, // đáp án a
    image: 'images/hinh7.png'
  },
  {
    question: 'Câu 135: Cho lược đồ ER trên, chuyển đổi lược đồ sang mô hình quan hệ ta được các thuộc tính của quan hệ như sau : .',
    options: [
      'Giáo viên( id_gv, hodem, ten, tuoi, id_k); Khoa(id_k, tenkhoa. sodienthoai).',
      'Giáo viên(id_gv, hoten, tuoi); Khoa(id_k, tenkhoa. sodienthoai).',
      'Giáo viên(id_gv, hoten, tuoi); Khoa(id_k, tenkhoa. sodienthoai, id_gv).',
      'Không có phương án đúng.'
    ],
    correctAnswer: 0, // đáp án a
    image: 'images/hinh7.png'
  },
  {
    question: 'Câu 136: Cho lược đồ ER trên, chuyển đổi lược đồ sang mô hình quan hệ ta được các thuộc tính của quan hệ như sau : .',
    options: [
      'Truongkhoa(id_tk, hodem, ten, tuoi); Khoa(id_k, tenkhoa. sodienthoai, id_tk).',
      'Truongkhoa(id_tk, hoten, tuoi, id_khoa); Khoa(id_k, tenkhoa. sodienthoai, id_tk).',
      'Truongkhoa(id_tk, hodem, ten, tuoi); Quanly(id_tk, id_khoa); Khoa(id_k, tenkhoa. sodienthoai, id_tk).',
      'Truongkhoa(id_tk, hodem, ten, tuoi, id_khoa), Khoa(id_k, tenkhoa. sodienthoai).'
    ],
    correctAnswer: 0, // đáp án a
    image: 'images/hinh8.png'
  },
  {
    question: 'Câu 137: Cho lược đồ ER trên, chuyển đổi lược đồ sang mô hình quan hệ ta áp dụng bước chuyển đổi thứ : .',
    options: ['3.', '4.', '5.', '7.'],
    correctAnswer: 0, // đáp án a
    image: 'images/hinh8.png'
  },
  {
    question: 'Câu 138: Hạt nhân của mô hình hướng đối tượng là : .',
    options: ['Lớp.', 'Quan hệ.', 'Thực thệ.', 'Liên kết.'],
    correctAnswer: 0 // đáp án a
  },
  {
    question: 'Câu 139: Trong mô hình hướng đối tượng, sự liên kết giữa các lớp đối tượng thực hiện thông qua: .',
    options: [
      'Liên kết.',
      'Kết nhập.',
      'Kế thừa và sự phụ thuộc.',
      'Tất cả các phương án đều đúng.'
    ],
    correctAnswer: 3 // đáp án d
  },
  {
    question: 'Câu 140: Trong mô hình hướng đối tượng, mỗi quan hệ giữa các lớp được thể hiện như: .',
    options: ['Kế thừa.', 'Sự trừu tượng.', 'Phương thức.', 'Thuộc tính của lớp, gọi là thuộc tính quan hệ.'],
    correctAnswer: 3 // đáp án d
  },
        
  {
    question: 'Câu 141: Trong mô hình hướng đối tượng, lớp A có thuộc tính mối quan hệ R với lớp B thì thuộc tính mối quan hệ R có: .',
    options: [
      'Kiểu dữ liệu là lớp B.',
      'Kiểu dữ liệu cha đợc xác định.',
      'Kiểu dữ liệu quan hệ.',
      'Kiểu dữ liệu số nguyên.'
    ],
    correctAnswer: 0 // đáp án a
  },
  {
    question: 'Câu 142: Trong mô hình hướng đối tượng, lớp A có thuộc tính mối quan hệ R với lớp B , nếu mỗi đối tượng thuộc lớp A có quan hệ với nhiều đối tượng thuộc lớp B thì R được xem như thuộc tính: .',
    options: ['Đa trị.', 'Đơn trị.', 'Phức hợp.', 'Phát sinh.'],
    correctAnswer: 0 // đáp án a
  },
  {
    question: 'Câu 143: Trong mô hình hướng đối tượng, lớp A có thuộc tính mối quan hệ R với lớp B , và thuộc tính R là thuộc tính đa trị thì trong lớp A ta sẽ khai báo: .',
    options: ['R: lớp B;', 'R: set(lớp B);', 'R: set(lớp A);', 'R: lớp A;'],
    correctAnswer: 1 // đáp án b
  },
  {
    question: 'Câu 144: Trong mô hình hướng đối tượng, để khai báo thuộc tính phức ta sử dụng từ khóa: .',
    options: ['Set;', 'List;', 'Bag;', 'Tuple;'],
    correctAnswer: 3 // đáp án d
  },
  {
    question: 'Câu 145: Trong mô hình hướng đối tượng, để khai báo thuộc tính bằng cấp ta khai báo như sau: .',
    options: ['Bằng cấp: Tuple;', 'Bằng cấp: Set;', 'Bằng cấp: List;', 'Bằng cấp: Bag;'],
    correctAnswer: 1 // đáp án b
  },
  {
    question: 'Câu 146: Trong mô hình hướng đối tượng, gọi C1 là siêu lớp (superclass) của lớp C2 có nghĩa là: .',
    options: ['C1 là cha của lớp C2;', 'C1 là con của lớp C2;', 'C1 là anh em của lớp C2;', 'Tất cả đều sai;'],
    correctAnswer: 0 // đáp án a
  },
  {
    question: 'Câu 147: Trong lược đồ CSDL hướng đối tượng, để mô tả quan hệ kế thừa (sự phân cấp lớp) ta sử dụng: .',
    options: ['Cung nét dày dạng mũi tên;', 'Cung nét mỏng dạng mũi tên;', 'Cung nét dày;', 'Cung nét mỏng;'],
    correctAnswer: 0, // đáp án a
    image: 'images/hinh9.png'
  },
  {
    question: 'Câu 148: Trong lược đồ CSDL hướng đối tượng, để mô tả mỗi quan hệ giữa các lớp bằng: .',
    options: ['Cung nét dày dạng mũi tên;', 'Cung nét mỏng dạng mũi tên;', 'Cung nét dày;', 'Cung nét mỏng;'],
    correctAnswer: 1 // đáp án b
  },
  {
    question: 'Câu 149: Trong lược đồ CSDL hướng đối tượng, kiểu phạm vi được bảo vệ đánh dấu bằng dấu: .',
    options: ['dấu +.', 'dấu #.', 'dấu -.', 'dấu ~.'],
    correctAnswer: 1 // đáp án b
  },
  {
    question: 'Câu 150: Hãy cho biết, hình vẽ trên mô phỏng cho: .',
    options: ['Kế thừa bội.', 'Kế thừa đơn.', 'Sai vì sử dụng cung mũi tên.', 'Tất cả các phương án đều sai.'],
    correctAnswer: 0, // đáp án a
    image: 'images/hinh10.png'
  },
  {
    question: 'Câu 151: Mối quan hệ kết tập là một kiểu kết hợp đặc biệt được sử dụng để: .',
    options: [
      'Mô hình hóa mối quan hệ tổng thể – các thành phần của nó.',
      'Mô hình hóa mối quan hệ phân biệt độc lập giữa hai lớp đối tượng.',
      'Mô hình hóa mối quan hệ cá thể – thể hiện của hai lớp cha – con.',
      'Tất cả các phương án đều sai.'
    ],
    correctAnswer: 0 // đáp án a
  },
  {
    question: 'Câu 152: Kết tập là một kiểu kết hợp đặc biệt, gồm có: .',
    options: [
      'Kết tập cơ sở, kết tập hợp thành.',
      'Kết tập cơ sở, kết tập hợp thành, kết tập phản xạ.',
      'Kết tập phản xạ, kết tập hợp thành.',
      'Kết tập phản xạ, kết tập hợp thành, kết tập bộ phận.'
    ],
    correctAnswer: 0 // đáp án a
  },
  {
    question: 'Câu 153: Cho lược đồ ER như trên, sau khi thực hiện chuyển đổi sang mô hình hướng đối tượng bằng quy tắc số 4 ta sẽ được lớp Người gồm các thuộc tính: .',
    options: [
      'id: allID, Hoten: String, Tuoi: Integer, Con: Set(Nguoi), Cha. Me: Nguoi;',
      'id: allID, Hoten: String, Tuoi: Integer, Cha. Me: Nguoi.',
      'id: allID, Hoten: String, Tuoi: Integer, Con: Set(Nguoi).',
      'id: allID, Hoten: String, Tuoi: Integer,'
    ],
    correctAnswer: 0, // đáp án a
    image: 'images/hinh11.png'
  },
  {
    question: 'Câu 154: Cho lược đồ ER như trên, sau khi thực hiện chuyển đổi sang mô hình quan hệ ta sẽ được quan hệ Người: .',
    options: [
      'Nguoi(id, hoten, tuoi, id_cha, id_me).',
      'Nguoi(id, hoten, tuoi, id_cha, id_me, id_con).',
      'Nguoi(id, hoten, tuoi, id_cha).',
      'Nguoi(id, hoten, tuoi).'
    ],
    correctAnswer: 0, // đáp án a
    image: 'images/hinh11.png'
  },
  {
    question: 'Câu 155: Cho lược đồ ER như trên, sau khi thực hiện chuyển đổi sang mô hình hướng đối tượng ta sẽ được các lớp: .',
    options: ['Giáo viên, Lớp, Môn học, Lịch dạy;', 'Giáo viên, Lớp, Môn học.', 'Giáo viên, Lịch dạy, Môn học.', 'Giáo viên, Lịch dạy, Lớp.'],
    correctAnswer: 0, // đáp án a
    image: 'images/hinh12.png'
  },
  {
    question: 'Câu 156: Cho lược đồ ER như trên, sau khi thực hiện chuyển đổi sang mô hình hướng đối tượng ta sẽ áp dụng quy tắc chuyển đổi thứ: .',
    options: ['5.', '4.', '3.', '2.'],
    correctAnswer: 0, // đáp án a
    image: 'images/hinh12.png'
  },
  {
    question: 'Câu 157: Cho lược đồ ER như trên, sau khi thực hiện chuyển đổi sang mô hình hướng đối tượng ta sẽ áp dụng quy tắc chuyển đổi thứ 5, quy tắc này làm phát sinh thêm một lớp mới từ quan hệ Dạy gọi là Lịch Dạy, Lịch Dạy sẽ gồm những thuộc tính gì? .',
    options: [
      'Thời gian: String, Giang: Giaovien, Gomco: Monhoc, Botri: Lop.',
      'Thời gian: String, Gomco: Monhoc, Botri: Lop.',
      'Giang: Giaovien, Gomco: Monhoc, Botri: Lop.',
      'Thời gian: String, Giang: Giaovien, Gomco: Monhoc.'
    ],
    correctAnswer: 0, // đáp án a
    image: 'images/hinh12.png'
  },
  {
    question: 'Câu 158: Cho lược đồ ER như trên, quan hệ Dạy được gọi là: .',
    options: ['Quan hệ đa nguyên.', 'Quan hệ nhị nguyên.', 'Quan hệ phức hợp.', 'Quan hệ đa trị.'],
    correctAnswer: 0, // đáp án a
    image: 'images/hinh12.png'
  },
  {
    question: 'Câu 159: Cho lược đồ ER như trên, thực hiện chuyển đổi sang mô hình quan hệ ta sẽ được số thực thể là: .',
    options: ['4.', '5.', '3.', '2.'],
    correctAnswer: 0, // đáp án a
    image: 'images/hinh12.png'
  },
  {
    question: 'Câu 160: Cho lược đồ ER như trên, thực hiện chuyển đổi sang mô hình quan hệ sẽ phát sinh thêm một quan hệ mới là quan hệ Lịch dạy, quan hệ này gồm những thuộc tính: .',
    options: [
      'id_gv, id_lop, id_monhoc.',
      'id_gv, id_lop, id_monhoc, thoigian.',
      'id_lop, thoigian.',
      'id_lop, id_gv, id_monhoc, thoigian, hoten, sotiet.'
    ],
    correctAnswer: 1, // đáp án b
    image: 'images/hinh12.png'
  },
  {
    question: 'Câu 161: Chuyển mỗi thực thể thành một quan hệ là việc?.',
    options: [
      'Chuyển tên thực thể thành tên quan hệ.',
      'Chuyển các thuộc tính của thực thể thành thuộc tính của quan hệ.',
      'Chuyển thuộc tính định danh của thực thể thành thuộc tính khoá của quan hệ.',
      'Tất cả các ý trên.'
    ],
    correctAnswer: 3, // đáp án d
    image: 'images/hinh13.png'
  },
  {
    question: 'Câu 162: Với phiếu giao hàng trên ta tìm được những thực thể nào?.',
    options: ['DM_KHACH,DM_HANG.', 'MD_KHACH,DM_HANG, PHIEU_GIAO_HANG.', 'Không có đáp án đúng.', 'PHIEU_GIAO_HANG, DM_KHACH.'],
    correctAnswer: 0 // đáp án a
  },
  {
    question: 'Câu 163: Cho lược đồ ER như trên, các quan hệ sinh ra tại bước chuyển đối thứ nhất từ mô hình ER sang mô hình quan hệ là:',
    options: ['Bác sĩ, Chuyên khoa, Bệnh nhân', 'Bác sĩ, Chuyên khoa, Bệnh nhân, Liệu pháp điều trị', 'Bệnh nhân, Bác Sĩ, Liệu pháp điều trị', 'Tất cả đều đúng'],
    correctAnswer: 0, // đáp án a
    image: 'images/hinh14.png'
  },
  {
    question: 'Câu 164: Cho lược đồ ER như trên, các quan hệ sinh ra sau khi thực hiện bảy bước chuyển đổi từ mô hình ER sang mô hình quan hệ là:',
    options: ['Bác sĩ, Chuyên khoa, Bệnh nhân', 'Bác sĩ, Chuyên khoa, Bệnh nhân, Bảng theo dõi điều trị', 'Bệnh nhân, Bác Sĩ, Liệu pháp điều trị', 'Tất cả đều đúng'],
    correctAnswer: 1, // đáp án b
    image: 'images/hinh14.png'
  },
  {
    question: 'Câu 165: Cho lược đồ ER như trên, các lớp đối tượng sinh ra sau khi thực hiện chuyển đổi từ mô hình ER sang mô hình hướng đối tượng là:',
    options: [
      'Lớp đối tượng Bác sĩ, Lớp đối tượng Chuyên khoa, Lớp đối tượng Bệnh nhân',
      'Lớp đối tượng Bác sĩ, Lớp đối tượng Chuyên khoa, Lớp đối tượng Bệnh nhân, Lớp đối tượng Bảng theo dõi điều trị',
      'Lớp Bệnh nhân, Lớp Bác Sĩ, Lớp Liệu pháp điều trị',
      'Tất cả đều sai'
    ],
    correctAnswer: 1, // đáp án b
    image: 'images/hinh14.png'
  },
  {
    question: 'Câu 166: Cho lược đồ ER như trên, các lớp đối tượng sinh ra sau khi thực hiện chuyển đổi từ mô hình ER sang mô hình hướng đối tượng',
    options: [
      'Lớp đối tượng Bác sĩ, Lớp đối tượng Chuyên khoa, Lớp đối tượng Bệnh nhân',
      'Lớp đối tượng Bác sĩ, Lớp đối tượng Chuyên khoa, Lớp đối tượng Bệnh nhân, Lớp đối tượng Bảng theo dõi điều trị',
      'Lớp Bệnh nhân, Lớp Bác Sĩ, Lớp Liệu pháp điều trị',
      'Tất cả đều sai'
    ],
    correctAnswer: 1, // đáp án b
    image: 'images/hinh14.png'
  },
  {
    question: 'Câu 167: Cho lược đồ ER trên, lược đồ quan hệ kết quả sau khi thực hiện chuyển đổi từ ER sang là:',
    options: [
      'Bác Sĩ(Mã bs, Họ đêm, Tên, Số đt, Địa chỉ, mã ck), Bệnh nhân( Mã bn, Họ đêm, tên, địa chỉ, Bác sĩ theo dõi), Chuyên khoa(mã ck, Tên ck), Bảng điều trị (mã bn, mã bs, ngày đt, liệu pháp).',
      'Bác Sĩ(Mã bs, Họ đêm, Tên, Số đt, Địa chỉ), Bệnh nhân( Mã bn, Họ đêm, tên, địa chỉ,), Chuyênkhoa(mã ck, Tên ck), Bảng điều trị (mã bn, mã bs, ngày đt, liệu pháp).',
      'Bác Sĩ(Mã bs, Họ đêm, Tên, Số đt, Địa chỉ, mã ck), Bệnh nhân( Mã bn, Họ đêm, tên, địa chỉ), Chuyênkhoa(mã ck, Tên ck), Bảng điều trị (mã bn, mã bs, ngày đt, liệu pháp).',
      'Không có phương án đúng'
    ],
    correctAnswer: 0, // đáp án a
    image: 'images/hinh14.png'
  },
  {
    question: 'Câu 168: Cho lược đồ ER trên, Kết quả sau khi thực hiện chuyển đổi từ ER sang quan hệ là : Bác Sĩ(Mã bs, Họ đêm, Tên, Số đt, Địa chỉ, mã ck), Bệnh nhân( Mã bn, Họ đêm, tên, địa chỉ, Bác sĩ theo dõi), Chuyên khoa(mã ck, Tên ck), Bảng điều trị (mã bn, mã bs, ngày đt, liệu pháp). Quan hệ Bảng điều trị sẽ được phát sinh tại bước chuyển đổi thứ:',
    options: ['5.', '6.', '7.', '8.'],
    correctAnswer: 0, // đáp án a
    image: 'images/hinh14.png'
  },
  {
    question: 'Câu 169: Cho lược đồ ER trên, thuộc tính mã ck đươc thêm vào quan hệ Bác Sĩ tại bước chuyển đổi thứ:',
    options: ['4.', '5.', '6.', '7.'],
    correctAnswer: 0, // đáp án a
    image: 'images/hinh14.png'
  },
  {
    question: 'Câu 169: Cho lược đồ ER trên, thuộc tính Bác sĩ theo dõi được thêm vào vào quan hệ Bệnh nhân tại bước chuyển đổi thứ:',
    options: ['4', '5', '6', '8'],
    correctAnswer: 0, // đáp án a
    image: 'images/hinh14.png'
  },
  {
    question: 'Câu 170: Ngôn ngữ DDL là:',
    options: ['Ngôn ngữ định nghĩa dữ liệu', 'Ngôn ngữ truy vấn dữ liệu', 'Ngôn ngữ định nghĩa cấu trúc', 'Tất cả các phương án đều đúng'],
    correctAnswer: 0 // đáp án a
  },
  {
    question: 'Câu 171: Một lớp mới có thể được định nghĩa bằng lệnh:',
    options: [
      '(make-class ClassName [:superclasses ListOfSuperClasses] [:attributes ListOfAttributes] [:methods ListOfMethodSpecs])',
      'Ngôn ngữ truy vấn dữ liệu',
      'Ngôn ngữ định nghĩa cấu trúc',
      'Tất cả các phương án đều sai'
    ],
    correctAnswer: 0 // đáp án a
  },
  {
    question: 'Câu 172: Ngôn ngữ DML là:',
    options: ['Ngôn ngữ thao tác dữ liệu', 'Ngôn ngữ truy vấn dữ liệu', 'Ngôn ngữ định nghĩa cấu trúc', 'Ngôn ngữ định nghĩa dữ liệu'],
    correctAnswer: 0 // đáp án a
  },
  {
    question: 'Câu 173: Ngôn ngữ DML là:',
    options: [
      'Ngôn ngữ cho phép khởi tạo, cập nhật, xóa các thể hiện riêng lẻ của lớp',
      'Ngôn ngữ cho phép mô tả lược đồ đối với cơ sở dữ liệu hướng đối tượng',
      'Cho phép đặc tả các giao dịch, điều khiển tính toàn vẹn ngữ nghĩa, sự cấp phép và quản lý truy cập các phương thức',
      'Ngôn ngữ định nghĩa cấu trúc'
    ],
    correctAnswer: 0 // đáp án a
  },
  {
    question: 'Câu 174: Ngôn ngữ DDL là:',
    options: [
      'Ngôn ngữ cho phép khởi tạo, cập nhật, xóa các thể hiện riêng lẻ của lớp',
      'Ngôn ngữ cho phép mô tả lược đồ đối với cơ sở dữ liệu hướng đối tượng',
      'Cho phép đặc tả các giao dịch, điều khiển tính toàn vẹn ngữ nghĩa, sự cấp phép và quản lý truy cập các phương thức',
      'Ngôn ngữ định nghĩa cấu trúc'
    ],
    correctAnswer: 1 // đáp án b
  },
  {
    question: 'Câu 175: Ngôn ngữ DDL là:',
    options: [
      'Ngôn ngữ cho phép khởi tạo, cập nhật, xóa các thể hiện riêng lẻ của lớp',
      'Ngôn ngữ cho phép mô tả lược đồ đối với cơ sở dữ liệu hướng đối tượng',
      'Cho phép đặc tả các giao dịch, điều khiển tính toàn vẹn ngữ nghĩa, sự cấp phép và quản lý truy cập các phương thức',
      'Ngôn ngữ định nghĩa cấu trúc'
    ],
    correctAnswer: 1 // đáp án b
  },
  {
    question: 'Câu 176: Ngôn ngữ DCL là:',
    options: [
      'Ngôn ngữ cho phép khởi tạo, cập nhật, xóa các thể hiện riêng lẻ của lớp',
      'Ngôn ngữ cho phép mô tả lược đồ đối với cơ sở dữ liệu hướng đối tượng',
      'Cho phép đặc tả các giao dịch, điều khiển tính toàn vẹn ngữ nghĩa, sự cấp phép và quản lý truy cập các phương thức',
      'Ngôn ngữ định nghĩa cấu trúc'
    ],
    correctAnswer: 2, // đáp án c
    image: 'images/hinh15.png'
  },
  {
    question: 'Câu 177: Ngôn ngữ DCL là:',
    options: ['Ngôn ngữ thao tác dữ liệu', 'Ngôn ngữ truy vấn dữ liệu', 'Ngôn ngữ điều khiển dữ liệu', 'Ngôn ngữ định nghĩa dữ liệu'],
    correctAnswer: 2 // đáp án c
  },
  {
    question: 'Câu 178: Reeloop là:',
    options: ['Ngôn ngữ truy vấn hướng đối tượng', 'Hệ quản trị cơ sở dữ liệu hướng đối tượng', 'Chuẩn của ngôn ngữ truy vấn hướng đối tượng', 'Ngôn ngữ định nghĩa dữ liệu'],
    correctAnswer: 0 // đáp án a
  },
  {
    question: 'Câu 179: Hệ thống O2 liên kết với thế giới CSDL bằng các chức năng:',
    options: ['Định danh đối tượng', 'Kiểu trừu tượng', 'Sự đóng gói', 'Tính kế thừa và sự ràng buộc', 'Tất cả các phương án đều đúng'],
    correctAnswer: 4 // đáp án e
  },
  {
    question: 'Câu 180: OQL là ngôn ngữ:',
    options: ['Truy vấn đối tượng', 'Định nghĩa đối tượng', 'Cho phép sự đóng gói', 'Thể hiện tính kế thừa và sự ràng buộc', 'Tất cả các phương án đều đúng'],
    correctAnswer: 4 // đáp án e
  },
  {
    question: 'Câu 181: Đầu vào của một truy vấn OQL là:',
    options: [
      'Một (hoặc nhiều hơn một) tập hợp các thể hiện của lớp được truy vấn hoặc các lớp trong đồ thị lược đồ của lớp được truy vấn',
      'Tập hợp các lớp trong lược đồ hướng đối tượng',
      'Tập hợp các đối tượng độc lập trong lược đồ hướng đối tượng',
      'Một tập hợp các thể hiện thuộc lớp cơ sở hay một tập hợp các thể hiện thuộc các lớp trong đồ thị truy vấn'
    ],
    correctAnswer: 0 // đáp án a
  },
  {
    question: 'Câu 182: Đầu ra của một truy vấn OQL là:',
    options: [
      'Một (hoặc nhiều hơn một) tập hợp các thể hiện của lớp được truy vấn hoặc các lớp trong đồ thị lược đồ của lớp được truy vấn',
      'Tập hợp các lớp trong lược đồ hướng đối tượng',
      'Tập hợp các đối tượng độc lập trong lược đồ hướng đối tượng',
      'Một tập hợp các thể hiện thuộc lớp cơ sở hay một tập hợp các thể hiện thuộc các lớp trong đồ thị truy vấn'
    ],
    correctAnswer: 3 // đáp án d
  },
  {
    question: 'Câu 183: Cho các lớp đối tượng trong lược đồ hướng đối tượng như sau: SELECT s.number FROM s IN Software. Kết quả của câu lệnh truy vấn này là:',
    options: [
      'Trả về một tập hợp các số nguyên là thể hiện của thuộc tính mã số của các đối tượng phần mềm s',
      'Trả về mã số của đối tượng s',
      'Trả về thuộc tính mã số của lớp phần mềm',
      'Trả về thuộc tính mã số của đối tượng s'
    ],
    correctAnswer: 0, // đáp án a
    image: 'images/hinh16.png'
  },
  {
    question: 'Câu 184: Cho các lớp đối tượng trong lược đồ hướng đối tượng như trên. SELECT p FROM p IN s.team, s IN Software WHERE s.number =111. Kết quả của câu lệnh truy vấn là:',
    options: [
      'Trả về một tập hợp các số nguyên là thể hiện của thuộc tính mã số của các đối tượng phần mềm s',
      'Trả về tập hợp các đối tượng p (người lập trình) tham gia trong phần mềm có mã số là 111',
      'Trả về tập hợp các đối tượng p có thuộc tính team của đối tượng s',
      'Trả về thuộc tính mã số của đối tượng s'
    ],
    correctAnswer: 1, // đáp án b
    image: 'images/hinh17.png'
  },
  {
    question: 'Câu 185: Để truy cập đến các thành phần dữ liệu của một đối tượng trong CSDL hướng đối tượng phải thông qua:',
    options: ['Biểu thức đường dẫn', 'Tên lớp', 'Tên đối tượng', 'Thể hiện thuộc tính của đối tượng'],
    correctAnswer: 0
  },
  {
    question: 'Câu 186: Nếu x là một đối tượng, a là một thuộc tính của đối tượng x, khi đó biểu thức đường dẫn để truy cập đến giá trị thuộc tính a của đối tượng x là:',
    options: ['x.a', 'x::a', 'x->a', 'Tất cả các phương án đều sai'],
    correctAnswer: 0
  },
  {
    question: 'Câu 187: Nếu x là một đối tượng, r là một thuộc tính mối quan hệ, khi đó biểu thức đường dẫn x.r là:',
    options: [
      'Thể hiện kết nối của mối quan hệ khi truy vấn',
      'Thể hiện truy xuất đến thuộc tính r của x',
      'Thể hiện sự truy xuất từ đối tượng thuộc lớp khác đến thuộc tính r',
      'Tất cả các phương án đều sai'
    ],
    correctAnswer: 0
  },
  {
    question: 'Câu 188: Cho truy vấn sau: SELECT p.name, p.role(p,s); FROM p IN Programmer, s IN p.works_on; WHERE s.number =111. Ý nghĩa của biểu thực p.name là:',
    options: [
      'Trả về tên của đối tượng p',
      'Trả về mã số của phần mềm',
      'Trả về giá trị của hàm name',
      'Trả về tập hợp các phần mềm s mà nhà lập trình p tham gia'
    ],
    correctAnswer: 0
  },
  {
    question: 'Câu 189: Cho truy vấn sau: SELECT p.name, p.role(p,s); FROM p IN Programmer, s IN p.works_on; WHERE s.number =111. Ý nghĩa của biểu thực s.number:',
    options: [
      'Trả về tên của đối tượng p',
      'Trả về mã số của phần mềm s',
      'Trả về giá trị của hàm name',
      'Trả về tập hợp các phần mềm s mà nhà lập trình p tham gia'
    ],
    correctAnswer: 1
  },
  {
    question: 'Câu 190: Cho truy vấn sau: SELECT p.name, p.role(p,s); FROM p IN Programmer, s IN p.works_on; WHERE s.number =111. Ý nghĩa của biểu thực p.role(p,s) là:',
    options: [
      'Trả về tên của đối tượng p',
      'Trả về mã số của phần mềm s',
      'Trả về giá trị của hàm role nói lên vai trò của nhà lập trình p trong phần mềm s',
      'Trả về tập hợp các phần mềm s mà nhà lập trình p tham gia'
    ],
    correctAnswer: 2
  },
  {
    question:
      'Câu 191: Cho truy vấn sau: SELECT p.name, p.role(p,s); FROM p IN Programmer, s IN p.works_on; WHERE s.number =111. Ý nghĩa của biểu thực p.work_on là:',
    options: [
      'Trả về tên của đối tượng p',
      'Trả về mã số của phần mềm s',
      'Trả về giá trị của hàm role nói lên vai trò của nhà lập trình p trong phần mềm s',
      'Trả về tập hợp các phần mềm s mà nhà lập trình p tham gia'
    ],
    correctAnswer: 3
  },
  {
    question: 'Câu 192: OQL được chia thành:',
    options: ['2 loại', '3 loại', '4 loại', '5 loại'],
    correctAnswer: 0
  },
  {
    question: 'Câu 193: OQL được chia thành:',
    options: [
      'Truy vấn trên một lớp đối tượng và truy vấn nối nhiều lớp trên một cấu trúc phân lớp',
      'Truy vấn trên một lớp đối tượng và truy vấn trên nhiều lớp độc lập',
      'Truy vấn trên các lớp đối tượng và truy vấn trên các thể hiện của lớp đối tượng',
      'Tất cả đều sai'
    ],
    correctAnswer: 0
  },
  {
    question:
      'Câu 194: Cho cú pháp câu lệnh Select như sau: SELECT E(e) FROM e IN E WHERE C(e). Trong cú pháp lệnh trên thì e là:',
    options: ['Thể hiện của lớp', 'Biểu thức đường dẫn', 'Hàm của lớp', 'Tập các lớp'],
    correctAnswer: 0
  },
  {
    question:
      'Câu 195: Cho cú pháp câu lệnh Select như sau: SELECT E(e) FROM e IN E WHERE C(e). Trong cú pháp lệnh trên thì E là:',
    options: [
      'Thể hiện của lớp',
      'Biểu thức đường dẫn. Hoặc hàm của lớp',
      'Tất cả đều sai',
      'Tập các lớp'
    ],
    correctAnswer: 1
  },
  {
    question:
      'Câu 196: Cho cú pháp câu lệnh Select như sau: SELECT E(e) FROM e IN E WHERE C(e). Trong cú pháp trên thì mệnh đề From chỉ ra:',
    options: [
      'Thể hiện của lớp',
      'Biểu thức đường dẫn. Hoặc hàm của lớp',
      'Tập hợp các đối tượng truy vấn theo biểu thức đường dẫn E',
      'Tập các lớp'
    ],
    correctAnswer: 2
  },
  {
    question:
      'Câu 197: Cho cú pháp câu lệnh Select như sau: SELECT E(e) FROM e IN E WHERE C(e). Trong cú pháp trên thì mệnh đề Where chỉ ra:',
    options: [
      'Thể hiện của lớp',
      'Biểu thức đường dẫn. Hoặc hàm của lớp',
      'Tập hợp các đối tượng truy vấn theo biểu thức đường dẫn E',
      'Điều kiện truy vấn'
    ],
    correctAnswer: 3
  },
  {
    question:
      'Câu 198: (1 đáp án)\nCâu 197: Cho các lớp như trên:\nCâu truy vấn để hiển thị tên nhóm, số điện thoại và tên nhà quản lý của các nhóm lập trình của công ty là:',
    options: [
      'SELECT g.name, g.phone_no, g.manager.name FROM g In Group;',
      'SELECT g.name, g.phone_no, manager.name FROM g In Group;',
      'SELECT g.name, g.phone_no, g.manager.name FROM g In Programer',
      'Tất cả đều sai'
    ],
    correctAnswer: 0,
    image: 'images/hinh18.png'
  },
  {
    question:
      'Câu 199: (1 đáp án)\nCâu 198: Cho các lớp như trên, hãy cho biết câu lệnh truy vấn sau: SELECT g.name, g.phone_no, g.manager.name FROM g In Group; Sai ở đâu:',
    options: ['g.manager.name', 'g in Group', 'g.phone_no', 'Câu lệnh truy vấn đúng không sai'],
    correctAnswer: 3,
    image: 'images/hinh19.png'
  },
  {
    question:
      'Câu 200: (1 đáp án)\nCâu 199: Cho các lớp như trên, hãy cho biết câu lệnh truy vấn sau: SELECT p.name, p.group.name, p.phone_no FROM p IN Group WHERE p.floor= 2; Sai ở:',
    options: ['g.manager.name', 'p IN Group', 'g.phone_no', 'Câu lệnh truy vấn đúng không sai'],
    correctAnswer: 1,
    image: 'images/hinh20.png'
  },
  {
    question:
      'Câu 201: (1 đáp án)\nCâu 200: Cho các lớp như trên: Câu truy vấn để hiển thị tên , số điện thoại và tên nhóm của những nhà lập tình làm việc ở tầng 2 là:',
    options: [
      'SELECT p.name, p.group.name, p.phone_no FROM p IN Programmer WHERE p.floor= 2;',
      'SELECT p.name, group.name, p.phone_no FROM p IN Programmer WHERE p.floor= 2 ;',
      'SELECT p.name, programmer.group.name, p.phone_no FROM p IN Group WHERE p.floor= 2;',
      'Tất cả đều sai'
    ],
    correctAnswer: 0
  },
  {
    question:
      'Câu 202: (1 đáp án)\nCâu 201: Cho các lớp như trên, hãy cho biết câu lệnh truy vấn sau:\nSELECT p.name, group.name, p.phone_no FROM p IN Programmer WHERE p.floor= 2; Sai ở:',
    options: ['group.name', 'p IN Group', 'g.phone_no', 'Câu lệnh truy vấn đúng không sai'],
    correctAnswer: 0
  },
  {
    question:
      'Câu 203: (1 đáp án)\nCâu 202: Cho các lớp như trên: Câu truy vấn liệt kê tên, số điện thoại của các nhà lập tình có mã số lớn hơn 111 và thuộc nhóm phân tích:',
    options: [
      'SELECT p.name, p.phone_no FROM p IN Programmer; WHERE (p.group.name = ‘Analysis’) AND (p.number > 111);',
      'SELECT p.name, p.phone_no FROM p IN Programmer; WHERE (p.name = ‘Analysis’) AND (p.number > 111);',
      'SELECT p.name, p.phone_no FROM p IN Programmer; WHERE (p.name = ‘Analysis’) AND (p.group > 111);',
      'Tất cả đều sai'
    ],
    correctAnswer: 0
  },
  {
    question:
      'Câu 204: (1 đáp án)\nCâu 203: Cho các lớp như trên, cho câu lệnh truy vấn: SELECT p.name, p.phone_no FROM p IN Programmer; WHERE (p.group.name = ‘Analysis’) AND (p.number > 111); Câu lệnh sai ở:',
    options: ['Sai tại p.name;', 'Sai ở p IN Programmer;', 'Sai ở p.phone_no', 'Tất cả đều sai'],
    correctAnswer: 3
  },
  {
    question:
      'Câu 205: (1 đáp án)\nCâu 204: Trong truy vấn OQL cho phép truy vấn tối đa:',
    options: ['1 lớp đối tượng', '2 lớp đối tượng', '3 lớp đối tượng', 'nhiều lớp đố tượng tùy theo sự phân cấp lớp'],
    correctAnswer: 3
  },
  {
    question:
      'Câu 206: (1 đáp án)\nCâu 205: Cho các lớp đối tượng như trên. Để hiển thị mã số, tên nhóm của các nhà lập trình tham gia trong dự án phần mềm số 101 và vai trò của họ trong dự án đó ta chọn câu lệnh:',
    options: [
      'SELECT p.number, p.name, p.group.name, p.role(p, s) FROM p IN Programmer, s IN Software WHERE (s.number = 101) AND (s IN p.works_on);',
      'SELECT p.number, p.name, p.group.name, p.role(p, s) FROM p IN Programmer, s IN Software WHERE (p.number = 101) AND (s IN p.works_on);',
      'SELECT p.number, p.name, p.group, p.role(p, s) FROM p IN Programmer, s IN Software WHERE (s.number = 101) AND (s IN p.works_on);',
      'SELECT p.number, p.name, p.group.name, role(p, s) FROM p IN Programmer, s IN Software WHERE (s.number = 101) AND (s IN p.works_on);'
    ],
    correctAnswer: 0
  },
  {
    question:
      'Câu 207: (1 đáp án)\nCâu 206: Cho các lớp đối tượng như trên.Và câu lệnh OQL như sau: SELECT p.number, p.name, p.group, p.role(p, s) FROM p IN Programmer, s IN Software WHERE (s.number = 101) AND (s IN p.works_on); câu lệnh sai ở:',
    options: ['Câu lệnh không sai', 'Sai tại p.group', 'Sai tại p In Programmer', 'Sai tại s In Software'],
    correctAnswer: 1
  },
  {
    question:
      'Câu 208: (1 đáp án)\nCâu 207: Cho các lớp đối tượng như trên.Và câu lệnh OQL như sau: SELECT p.number, p.name, p.group, p.role(p, s) FROM p IN Programmer, s IN Software WHERE (s.number = 101) AND (s IN p.works_on); Câu lệnh này sẽ hiển thị mã số, tên, tên nhóm các nhà lập trình tham gia trong dự án phần mềm số 101 và vai trò của họ trong dự án. Tuy nhiên câu lệnh này bị lỗi tại p.group cần sửa lại là :',
    options: ['Câu lệnh không sai', 'p.group.name', 'p In software', 's In Programmer'],
    correctAnswer: 1
  },
  {
    question:
      'Câu 209: (1 đáp án)\nCâu 208: Cho các lớp đối tượng như trên.Và câu lệnh OQL như sau: SELECT p.name, p.phone_no, p.group.name FROM p IN Programmer, s IN Software WHERE (p.number = 111) AND NOT(s IN p.works_on); Câu lệnh này sẽ hiển thị tên, số điện thoại, tên nhóm, của các nhà lập trình không làm việc ở dự án phần mềm số 111. Tuy nhiên câu lệnh này bị lỗi tại:',
    options: ['Tất cả các phương án', 'p.number=111', 's In p.work_on', 's In Software'],
    correctAnswer: 1
  },
  {
    question:
      'Câu 210: (1 đáp án)\nCâu 209: Cho các lớp đối tượng như trên.Và câu lệnh OQL như sau: SELECT p.name, p.phone_no, p.group.name FROM p IN Programmer, s IN Software WHERE (p.number = 111) AND NOT(s IN p.works_on); Câu lệnh này sẽ hiển thị tên, số điện thoại, tên nhóm, của các nhà lập trình không làm việc ở dự án phần mềm số 111. Tuy nhiên câu lệnh này bị lỗi tại điều kiện Where cần sửa lại là:',
    options: ['Không có phương án đúng', 's.number=111', 's In s.work_on', 's In Group'],
    correctAnswer: 1
  },
  {
    question:
      'Câu 211: (1 đáp án)\nCâu 210: Cho các lớp đối tượng như trên. Để hiển thị tên, số điện thoại, tên nhóm, của các nhà lập trình không làm việc ở dự án phần mềm số 111. Ta chọn phương án nào trong các phương án sau:',
    options: [
      'SELECT p.name, p.phone_no, p.group.name FROM p IN Programmer, s IN Software WHERE (s.number = 111) AND NOT(s IN p.works_on);',
      'SELECT p.name, p.phone_no, p.group.name FROM p IN Programmer, s IN Software WHERE (p.number = 111) AND NOT(s IN p.works_on);',
      'SELECT p.name, p.phone_no, s.group.name FROM p IN Programmer, s IN Software WHERE (p.number = 111) AND NOT(s IN p.works_on);',
      'SELECT p.name, p.phone_no, p.group.name FROM p IN Programmer, s IN Software WHERE (p.number = 111) AND NOT(s IN s.works_on);'
    ],
    correctAnswer: 0
  },
  {
    question:
      'Câu 212: (1 đáp án)\nCâu 211: Cho các lớp đối tượng như trên. Liệt kê mã số, tên, kinh phí của các dự án phần mềm sau năm 1997 do nhà lập trình có mã số 111 quản lý. Ta chọn phương án nào trong các phương án sau:',
    options: [
      'SELECT s.number, s.name, s.budget FROM s IN Software, p IN Programmer WHERE (p.number = 111) AND (p IN s.team) AND (role(p,s) = ‘Manage’) AND ( year(s.date) >1997);',
      'SELECT p.number, s.name, s.budget FROM s IN Software, p IN Programmer WHERE (p.number = 111) AND (p IN s.team) AND (role(p,s) = ‘Manage’) AND ( year(s.date) >1997);',
      'SELECT s.number, p.name, s.budget FROM s IN Software, p IN Programmer WHERE (p.number = 111) AND (p IN s.team) AND (role(p,s) = ‘Manage’) AND ( year(s.date) >1997);',
      'SELECT s.number, s.name, p.budget FROM s IN Software, p IN Programmer WHERE (p.number = 111) AND (p IN s.team) AND (role(p,s) = ‘Manage’) AND ( year(s.date) >1997);'
    ],
    correctAnswer: 0
  },
  {
    question:
      'Câu 213: (1 đáp án)\nCâu 212: Cho các lớp đối tượng như trên. Liệt kê mã số, tên, kinh phí của các dự án phần mềm sau năm 1997 do nhà lập trình có mã số 111 quản lý. Ta có câu lệnh OQL sau: SELECT s.number, s.name, s.budget FROM s IN Software, p IN Programmer WHERE (s.number = 111) AND (p IN s.team) AND (role(p,s) = ‘Manage’) AND (year(s.date) >1997); Tuy nhiên câu lệnh trên bị lỗi tại:',
    options: ['s.name', 's.number=111', 'p IN s.team', 'role(p,s)= ‘Manage’'],
    correctAnswer: 1
  },
  {
    question:
      'Câu 214: (1 đáp án)\nCâu 213: Cho các lớp đối tượng như trên. Liệt kê mã số, tên, kinh phí của các dự án phần mềm sau năm 1997 do nhà lập trình có mã số 111 quản lý. Ta có câu lệnh OQL sau: SELECT s.number, s.name, s.budget FROM s IN Software, p IN Programmer WHERE (p.number = 111) AND (p IN s.team) AND (role(p) = ‘Manage’) AND (year(s.date) >1997); Tuy nhiên câu lệnh trên bị lỗi tại:',
    options: ['s.name', 'p.number=111', 'p IN s.team', 'role(p)= ‘Manage’'],
    correctAnswer: 3
  },
  {
    question:
      'Câu 215: (1 đáp án)\nCâu 214: Cho các lớp đối tượng như trên. Liệt kê mã số, tên, kinh phí của các dự án phần mềm sau năm 1997 do nhà lập trình có mã số 111 quản lý. Ta có câu lệnh OQL sau: SELECT s.number, s.name, s.budget FROM s IN Software, p IN Programmer WHERE (p.number = 111) AND (s IN s.team) AND (role(p,s) = ‘Manage’) AND (year(s.date) >1997); Tuy nhiên câu lệnh trên bị lỗi tại:',
    options: ['s.name', 'p.number=111', 's IN s.team', 'role(p,s)= ‘Manage’'],
    correctAnswer: 2
  },
  {
    question:
      'Câu 216: (1 đáp án)\nCâu 215: Cho các lớp đối tượng như trên. Liệt kê mã số, tên, kinh phí của các dự án phần mềm sau năm 1997 do nhà lập trình có mã số 111 quản lý. Ta có câu lệnh OQL sau: SELECT s.number, s.name, s.budget FROM s IN Software, p IN Programmer WHERE (p.number = 111) AND (p IN s.team) AND (role(p,s) = ‘Manage’) AND (year(p.date) >1997); Tuy nhiên câu lệnh trên bị lỗi tại:',
    options: ['year(p.date)>1997', 'p.number=111', 'p IN s.team', 'role(p,s)= ‘Manage’'],
    correctAnswer: 0
  },
  {
    question: 'Câu 217: (1 đáp án)\nCâu 216: Hãy cho biết đặc trưng của OQL:',
    options: [
      'OQL hỗi trợ kiểu phong phú hơn.',
      'OQL có thể tích hợp với các tính năng của ngôn ngữ lập trình hướng đối tượng như Smalltalk, C++, Java',
      'Truy vấn trên tất cả các thể hiện thuộc lớp chỉ ra trong đồ thị truy vấn',
      'Tất cả các phương án'
    ],
    correctAnswer: 3
  },
  {
    question:
      'Câu 218: (1 đáp án)\nCâu 217: Cho lớp Giao viên như sau: Class GIAOVIEN properties OID: ID; Hoten: String; Tuoi: Integer; Sothich: Set(String); Thuoc: KHOA; Giang: Set(MONHOC); Diachi: Tuple( Sonha: Integer; Duong: String; Thanhpho: String); operations ....... End GIAOVIEN. OID được gọi là thuộc tính:',
    options: ['Định danh.', 'Khóa', 'Thuộc tính đa trị', 'Thuộc tính mỗi quan hệ'],
    correctAnswer: 0
  },
  {
    question:
      'Câu 219: (1 đáp án)\nCâu 218: Cho lớp GIAOVIEN ... Sothich được gọi là thuộc tính:',
    options: ['Định danh.', 'Khóa', 'Thuộc tính đa trị', 'Thuộc tính mỗi quan hệ'],
    correctAnswer: 2
  },
  {
    question:
      'Câu 220: (1 đáp án)\nCâu 219: Cho lớp GIAOVIEN ... Thuoc được gọi là thuộc tính:',
    options: ['Định danh.', 'Khóa', 'Thuộc tính đa trị', 'Thuộc tính mỗi quan hệ'],
    correctAnswer: 3
  },
  {
    question:
      'Câu 221: (1 đáp án)\nCâu 220: Cho lớp GIAOVIEN ... Diachi được gọi là thuộc tính:',
    options: ['Định danh.', 'Phức hợp', 'Thuộc tính đa trị', 'Thuộc tính mỗi quan hệ'],
    correctAnswer: 1
  },
  {
    question:
      'Câu 222: (1 đáp án)\nCâu 221 Cho các lớp đối tượng như trên. Câu lệnh truy vấn sau: SELECT p.Name FROM p in SV_TOTNGHIEP WHERE p.DiemTB > = 7 Làm nhiệm vụ:',
    options: [
      'Liệt kê tên những sin h viên đã tốt nghiệp có điểm trung bình >=7',
      'Liệt kê tên những sinh viên đã tốt nghiệp',
      'Liệt kê tên những sinh viên có trong bảng SV_Tốt nghiệp và có điểm trung bình >=7',
      'Câu lệnh sai cú pháp'
    ],
    correctAnswer: 0
  },
  {
    question:
      'Câu 223: (1 đáp án)\nCâu 222: Cho các lớp đối tượng như trên. Câu lệnh truy vấn sau: SELECT Name FROM p in SV_TOTNGHIEP WHERE p.DiemTB > = 7 Câu lệnh trên sai ở:',
    options: ['Không có lỗi sai', 'Sai ở Select Name', 'Sai ở p in SV_TOTNGHIÊP', 'Sai ở mệnh đề Where'],
    correctAnswer: 1
  },
  {
    question:
      'Câu 224: Cho các lớp đối tượng như trên. Để hiển thị ra tên những sinh viên đã tốt nghiệp với điểm trung bình >=8 ta chọn câu lệnh nào?',
    options: [
      'SELECT p.Name FROM p in SV_TOTNGHIEP WHERE p.DiemTB > = 7',
      'SELECT s.Name FROM p in SV_TOTNGHIEP WHERE p.DiemTB > = 7',
      'SELECT Name FROM p in SV_TOTNGHIEP WHERE DiemTB > = 7',
      'SELECT Name FROM SV_TOTNGHIEP WHERE p.DiemTB > = 7'
    ],
    correctAnswer: 0
  },
  {
    question:
      'Câu 225: Cho các lớp đối tượng như trên. Để hiển thị ra tên những sinh viên đã tốt nghiệp mà trưởng khoa quản lý sinh viên đó là Le An ta chọn câu lệnh:',
    options: [
      'SELECT p.Name FROM p in SV_TOTNGHIEP WHERE p.Khoa.Truongkhoa.Hoten = ‘Le An’',
      'SELECT p.Name FROM p in SV_TOTNGHIEP WHERE p.Khoa.Hoten =‘Le An’',
      'SELECT p.Name FROM p in SV_TOTNGHIEP WHERE p.Khoa.Truongkhoa =‘Le An’',
      'SELECT p.Name FROM p in SV_TOTNGHIEP WHERE p. Truongkhoa.Hoten =‘Le An’'
    ],
    correctAnswer: 0
  },
  {
    question:
      'Câu 226: Cho các lớp đối tượng như trên. Để liệt kê ra tên những giáo viên có sở thích là Xem TV ta chọn câu lệnh:',
    options: [
      'SELECT p.Name FROM p in GIAOVIEN WHERE ‘xem TV’ in p.Sothich',
      'SELECT Name FROM p in GIAOVIEN WHERE ‘xem TV’ in p.Sothich',
      'SELECT p.Name FROM GIAOVIEN WHERE ‘xem TV’ in p.Sothich',
      'SELECT p.Name FROM p in GIAOVIEN WHERE Sothich= ‘xem TV’'
    ],
    correctAnswer: 0
  },
  {
    question:
      'Câu 227: Cho các lớp đối tượng như trên. Cho câu lệnh truy vấn liệt kê tất cả tên giáo viên có sở thich là xem tivi như sau:\nSELECT p.Name FROM p in GIAOVIEN\nWHERE ‘xem TV’ in p.Sothich\nHãy cho biết câu lệnh trên sai ở đâu?',
    options: ['Sai ở mệnh đề Where', 'Sai ở mệnh đề From', 'Sai ở mệnh đề Select', 'Câu lệnh trên đúng'],
    correctAnswer: 3
  },
  {
    question:
      'Câu 228: Cho các lớp đối tượng như trên. Cho câu lệnh truy vấn liệt kê tên của những sinh viên đã tốt nghiệp mà tuổi của sinh viên đó lơn hơn tuổi của giáo viên hướng dẫn:\nSELECT p.Name FROM p in SV_TOTNGHIEP, WHERE p.Tuoi > f.Tuoi\nHãy cho biết câu lệnh trên sai ở:',
    options: ['Sai ở mệnh đề Where', 'Sai ở mệnh đề From', 'Sai ở mệnh đề Select', 'Câu lệnh trên đúng'],
    correctAnswer: 1
  },
  {
    question:
      'Câu 229: Cho các lớp đối tượng như trên. Cho câu lệnh truy vấn liệt kê tên của những sinh viên đã tốt nghiệp mà tuổi của sinh viên đó lơn hơn tuổi của giáo viên hướng dẫn\nSELECT p.Name FROM p in SV_TOTNGHIEP, WHERE p.Tuoi > f.Tuoi\nCâu lệnh truy vấn sai tại mệnh đề From cần sửa là:',
    options: [
      'FROM p in SV_TOTNGHIEP, f in p.GVhuongdan',
      'FROM SV_TOTNGHIEP, GVhuongdan',
      'FROM p in SV_TOTNGHIEP, f in GVhuongdan',
      'FROM SV_TOTNGHIEP,'
    ],
    correctAnswer: 0
  },
  {
    question:
      'Câu 230: Cho các lớp đối tượng như trên. Cho câu lệnh truy vấn SELECT p.Name FROM p in SV_TOTNGHIEP, f in p.GVhuongdan WHERE p.Tuoi > f.Tuoi\nKết quả của câu lệnh truy vấn trên là:',
    options: [
      'Liệt kê tên những sinh viên đã tốt nghiệp mà có tuổi lớn hơn tuổi của giáo viên hướng dẫn',
      'Liệt kê những sinh viên đã tốt nghiệp mà có tuổi nhỏ hơn tuổi của giáo viên hướng dẫn',
      'Liệt kê tên của những giáo viên mà có tuổi nhỏ hơn tuổi của sinh viên mình hướng dẫn'
    ],
    correctAnswer: 0
  },
  {
    question:
      'Câu 231: (1 đáp án)\nCâu 230: Cho lược đồ ER như trên. Để chuyển đổi mối quan hệ phản xạ như trên ta sử dụng quy tắc chuyển đổi thứ:',
    options: ['1', '2', '3', '4'],
    correctAnswer: 3,
    image: 'images/hinh21.png'
  },


    ],
    // Các môn khác bắt đầu là mảng rỗng, bạn có thể bổ sung sau
    // pm1: [],
    // pm2: [],
    // mang: [],
    // hdh: [],
    // ktlt: [],
};


