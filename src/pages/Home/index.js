import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import imageSlide1 from '../../assets/images/slide_1.png';
import imageSlide2 from '../../assets/images/slide_2.png';
import imageSlide3 from '../../assets/images/slide_3.png';
import imageSlide4 from '../../assets/images/slide_4.jpg';
import imageMore from '../../assets/images/more.png';
import userMore from '../../assets/images/more_user.png';
import imageUser1 from '../../assets/images/customer_1.png';
import imageUser2 from '../../assets/images/customer_2.png';
import { Card, Col, Row } from 'react-bootstrap';
import Button from '../../common/Button/Button';
import { useCallback, useState } from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const cx = classNames.bind(styles);

function Home() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [showContactForm, setShowContactForm] = useState(false);
    const handleShowContactForm = useCallback(() => setShowContactForm(true), []);
    const handleCloseContactForm = useCallback(() => setShowContactForm(false), []);

    const { t } = useTranslation();

    useEffect(() => {
        document.title = t('home');
        Aos.init();
    }, [t]);

    const handleCardClick = (index) => {
        setActiveIndex(index);
    };

    const carouselItems = [
        { src: imageSlide2, title: t('transportation'), alt: 'Container' },
        { src: imageSlide3, title: t('tools'), alt: 'Boxes' },
        { src: imageSlide4, title: t('transportationPlace'), alt: 'Ship' },
    ];

    return (
        <>
            <div className={cx('container')}>
                <div className={cx('background-image')}>
                    <img src={imageSlide1} alt="Ảnh nền" />
                </div>
                <div onClick={handleShowContactForm} className={cx('mail')}>
                    <FontAwesomeIcon className={cx('icon')} color="white" icon={faQuestion} />
                </div>
                <ContactForm show={showContactForm} handleClose={handleCloseContactForm} />
                <div className={cx('section-logistics')}>
                    <div className={cx('overlay')}></div>
                    <Row className={cx('section-container')}>
                        <Col data-aos="fade-right" xs={12} md={12} lg={5}>
                            {/* Phần bên trái */}
                            <div className={cx('content-left')}>
                                <h2 className={cx('title')}>{t('logistics')}</h2>
                                <p className={cx('description')}>{t('contents')}</p>
                                <button className={cx('btn-learn-more')}>
                                    {t('find')}
                                    <img className={cx('arrow-learn-more')} src={imageMore} alt="Tìm hiểu ngay" />
                                </button>
                            </div>
                        </Col>

                        <Col data-aos="fade-left" xs={12} md={12} lg={7}>
                            {/* Phần bên phải */}
                            <div className={cx('carousel-container')}>
                                <div className={cx('carousel')}>
                                    {carouselItems.map((item, index) => (
                                        <div
                                            key={index}
                                            className={cx('carousel-item', {
                                                active: index === activeIndex,
                                            })}
                                            onClick={() => handleCardClick(index)}
                                        >
                                            <Card className={cx(['w-100', 'h-100'])}>
                                                <Card.Img
                                                    className={cx('carousel-image')}
                                                    variant="top"
                                                    src={item.src}
                                                    alt={item.alt}
                                                />
                                                <Card.Body>
                                                    <Card.Title className={cx('carousel-title')}>
                                                        {item.title}
                                                    </Card.Title>
                                                    <Button className={cx('carousel-link')} href={'#'}>
                                                        {t('find')}
                                                    </Button>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
            <div className={cx('container-comment')}>
                <div className={cx('comment-header')}>
                    <span className={cx('comment-title')}>KHÁCH HÀNG NÓI GÌ VỀ CHÚNG TÔI</span>
                </div>
                <Row className={cx(['comments', 'gy-4'])}>
                    <Col data-aos="flip-up" xs={12} md={6} lg={6}>
                        <div className={cx('comment-item')}>
                            <div className={cx('comment-content')}>
                                <img src={imageUser1} alt="Customer" />
                                <div className={cx('comment-text')}>
                                    <span>
                                        “ Bằng chính chất lượng sản phẩm và giá cả phù hợp, thực hiện tốt chế độ bảo
                                        hành, dịch vụ sau bán hàng chuyên nghiệp.”
                                    </span>
                                    <div className={cx('comment-user')}>
                                        <div className={cx('info-user')}>
                                            <span className={cx('user')}>Ms Taylor</span>
                                            <span className={cx('founder')}>Founder ABC</span>
                                        </div>
                                        <img src={userMore} alt="More customer" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col data-aos="flip-up" xs={12} md={6} lg={6}>
                        <div className={cx('comment-item')}>
                            <div className={cx('comment-content')}>
                                <img src={imageUser2} alt="Customer" />
                                <div className={cx('comment-text')}>
                                    <span>
                                        “ Bằng chính chất lượng sản phẩm và giá cả phù hợp, thực hiện tốt chế độ bảo
                                        hành, dịch vụ sau bán hàng chuyên nghiệp.”
                                    </span>
                                    <div className={cx('comment-user')}>
                                        <div className={cx('info-user')}>
                                            <span className={cx('user')}>Mr David</span>
                                            <span className={cx('founder')}>Founder ABC</span>
                                        </div>
                                        <img src={userMore} alt="More customer" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col data-aos="flip-up" xs={12} md={6} lg={6}>
                        <div className={cx('comment-item')}>
                            <div className={cx('comment-content')}>
                                <img src={imageUser2} alt="Customer" />
                                <div className={cx('comment-text')}>
                                    <span>
                                        “ Bằng chính chất lượng sản phẩm và giá cả phù hợp, thực hiện tốt chế độ bảo
                                        hành, dịch vụ sau bán hàng chuyên nghiệp.”
                                    </span>
                                    <div className={cx('comment-user')}>
                                        <div className={cx('info-user')}>
                                            <span className={cx('user')}>Mr David</span>
                                            <span className={cx('founder')}>Founder ABC</span>
                                        </div>
                                        <img src={userMore} alt="More customer" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default Home;
