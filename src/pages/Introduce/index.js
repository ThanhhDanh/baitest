import React from 'react';
import classNames from 'classnames/bind';
import { Row, Col } from 'react-bootstrap';
import styles from './Introduce.module.scss';
import backgroundImage from '../../assets/images/bg-service.png';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const cx = classNames.bind(styles);

function Introduce() {
    useEffect(() => {
        document.title = 'Giới thiệu';
        Aos.init();
    }, []);
    return (
        <div
            className={cx('introduce-container')}
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                padding: 'var(--default-layout-header-height) 20px',
                minHeight: '100vh',
            }}
        >
            <div className={cx('overlay')}></div>
            <div data-aos="zoom-in-up" className={cx('container-content')}>
                <section className={cx('about-me')}>
                    <h2 className={cx('section-title')}>Giới thiệu về tôi</h2>
                    <p className={cx('description')}>
                        Tôi là <strong>Lê Thanh Danh</strong>, một Front-End Developer với kinh nghiệm trong việc xây
                        dựng và duy trì các codebase tối ưu, hỗ trợ phát triển phần mềm một cách hiệu quả. Với niềm đam
                        mê học hỏi và cải thiện không ngừng, tôi luôn tìm kiếm cơ hội để cập nhật những xu hướng và thực
                        tiễn tốt nhất trong ngành. Tôi tự hào khi có thể giải quyết các thách thức phức tạp, cải thiện
                        trải nghiệm người dùng và phát triển các giải pháp kỹ thuật vững chắc.
                    </p>
                </section>
                <Row>
                    {/* Cột bên trái: Giới thiệu và kỹ năng */}
                    <Col xs={12} lg={6} className={cx('left-col')}>
                        <section className={cx('skills')}>
                            <h2 className={cx('section-title')}>Kỹ năng</h2>
                            <ul className={cx('skill-list')}>
                                <li>
                                    <strong className={cx('title')}>Ngôn ngữ lập trình:</strong> C++, Javascript,
                                    Python, Java
                                </li>
                                <li>
                                    <strong className={cx('title')}>Frontend:</strong> ReactJS, React Native, Bootstrap,
                                    HTML, CSS
                                </li>
                                <li>
                                    <strong className={cx('title')}>Backend:</strong> Spring MVC, Spring Security,
                                    Django, Flask
                                </li>
                                <li>
                                    <strong className={cx('title')}>Quản lý cơ sở dữ liệu:</strong> MySQL, SQL Server
                                </li>
                                <li>
                                    <strong className={cx('title')}>Công cụ:</strong> Git
                                </li>
                            </ul>
                        </section>
                        <section className={cx('contact')}>
                            <h2 className={cx('section-title')}>Liên hệ</h2>
                            <ul className={cx('contact-list')}>
                                <li>
                                    <strong className={cx('title')}>Email:</strong>{' '}
                                    <a href="mailto:97.lethanhdanh.toky@gmail.com">97.lethanhdanh.toky@gmail.com</a>
                                </li>
                                <li>
                                    <strong className={cx('title')}>Điện thoại:</strong> 0902505949
                                </li>
                                <li>
                                    <strong className={cx('title')}>GitHub:</strong>{' '}
                                    <a href="https://github.com/ThanhhDanh" target="_blank" rel="noopener noreferrer">
                                        ThanhhDanh
                                    </a>
                                </li>
                                <li>
                                    <strong className={cx('title')}>LinkedIn:</strong>{' '}
                                    <a
                                        href="https://www.linkedin.com/in/danhle2003/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        danhle2003
                                    </a>
                                </li>
                            </ul>
                        </section>
                    </Col>

                    {/* Cột bên phải: Dự án và liên hệ */}
                    <Col xs={12} lg={6} className={cx('right-col')}>
                        <section className={cx('projects')}>
                            <h2 className={cx('section-title')}>Dự án tiêu biểu</h2>
                            <div className={cx('project-item')}>
                                <h3>E-commerce App (Full Stack)</h3>
                                <p>
                                    <strong className={cx('title')}>Công nghệ:</strong> Python, Django, React Native,
                                    Firebase
                                </p>
                                <p>
                                    Xây dựng ứng dụng thương mại điện tử cho phép người dùng mua sắm, đánh giá sản phẩm,
                                    và so sánh giá cả. Hệ thống hỗ trợ người bán tạo cửa hàng và quản lý sản phẩm.
                                </p>
                            </div>
                            <div className={cx('project-item')}>
                                <h3>Equipment Maintenance Management (Full Stack)</h3>
                                <p>
                                    <strong className={cx('title')}>Công nghệ:</strong> Java, Spring MVC, ReactJS,
                                    Firebase
                                </p>
                                <p>
                                    Hệ thống quản lý bảo trì thiết bị bao gồm theo dõi vị trí, lịch sử sửa chữa, quản lý
                                    sự cố và chi phí bảo trì.
                                </p>
                            </div>
                            <div className={cx('project-item')}>
                                <h3>Airline Ticket Sales App (Frontend)</h3>
                                <p>
                                    <strong className={cx('title')}>Công nghệ:</strong> Python, Flask, Javascript
                                </p>
                                <p>
                                    Ứng dụng hỗ trợ người dùng tra cứu, sắp xếp và mua vé máy bay trực tuyến. Tích hợp
                                    phương thức thanh toán đa dạng.
                                </p>
                            </div>
                        </section>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Introduce;
