import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            home: 'Home',
            introduce: 'Introduce',
            posts: 'Posts',
            contact: 'Contact',
            welcome: 'Welcome!!!',
            language: 'Language',
            vietnamese: 'Vietnamese',
            english: 'English',
            search: 'Search......',

            //Content
            logistics: 'Logistics',
            contents:
                'K&A is an enterprise specializing in providing diverse products and services to domestic and foreign customers, especially businesses in export processing zones and industrial zones. IN THE FIELD OF PRECISION MECHANICAL PROCESSING',
            find: 'Find More',
            transportation: 'Transportation',
            tools: 'Tools',
            transportationPlace: 'Transportation Place',
        },
    },
    vi: {
        translation: {
            home: 'Trang chủ',
            introduce: 'Giới thiệu',
            posts: 'Bài viết',
            contact: 'Liên hệ',
            welcome: 'Xin Chào bạn !!!',
            language: 'Ngôn ngữ',
            vietnamese: 'Tiếng Việt',
            english: 'English',
            search: 'Tìm kiếm......',

            //Content
            logistics: 'HẬU CẦN',
            contents:
                'K&A là doanh nghiệp chuyên cung cấp các sản phẩm, dịch vụ đa dạng cho khách hàng trong và ngoài nước, đặc biệt là các doanh nghiệp trong khu chế xuất, khu công nghiệp. TRONG LĨNH VỰC GIA CÔNG CƠ KHÍ CHÍNH XÁC',
            find: 'Tìm hiểu ngay',
            transportation: 'Vận chuyển',
            tools: 'Dụng cụ',
            transportationPlace: 'Nơi vận chuyển',
        },
    },
};

i18n.use(initReactI18next).init({
    resources,
    lng: 'vi', // Ngôn ngữ mặc định
    fallbackLng: 'vi', // Dự phòng nếu không tìm thấy ngôn ngữ
    interpolation: {
        escapeValue: false, // React đã xử lý bảo mật
    },
});

export default i18n;
