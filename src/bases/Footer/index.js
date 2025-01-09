import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import Button from '../../common/Button/Button';

import imageLogo from '../../assets/images/K&A.png';
import imageMail from '../../assets/images/mail.png';
import imagePhone from '../../assets/images/phone.png';
import imageSocialNetwork from '../../assets/images/social_network.png';
import imageFooterUp from '../../assets/images/footer_up.png';
import { Col, Row } from 'react-bootstrap';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('footer')}>
            <Row className={cx(['footer-content', 'gy-4'])}>
                <Col xs={12} md={12} lg={5}>
                    <div className={cx('footer-content-left')}>
                        <img className={cx('footer-content-logo')} src={imageLogo} alt="Logo" />
                        <div className={cx('footer-content-left-content')}>
                            K&A là doanh nghiệp chuyên cung cấp các sản phẩm và dịch vụ đa dạng cho các khách hàng trong
                            và ngoài nước, đặc biệt là các doanh nghiệp trong các khu chế xuất khu công nghiệp VỀ LĨNH
                            VỰC GIA CÔNG CƠ KHÍ CHÍNH XÁC
                        </div>
                        <div className={cx('footer-content-left-subcribe')}>Đăng kí nhận thông tin</div>
                        <div className={cx('mail-container')}>
                            <input type="checkbox" id="toggle-state" className={cx('hidden-checkbox')} />
                            <div className={cx('mail-content')}>
                                <div className={cx('mail')}>
                                    <img src={imageMail} alt="" />
                                    <input
                                        type="text"
                                        className={cx('footer-content-left-input')}
                                        placeholder="Nhập Email của bạn"
                                    />
                                </div>
                                <label htmlFor="toggle-state" className={cx('subcribe')}>
                                    <div className={cx('subcribe-text')}>Đăng ký ngay</div>
                                    <svg
                                        className={cx('subcribe-img')}
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g clipPath="url(#clip0_2692_173)">
                                            <path
                                                d="M22.574 13.5539C22.3152 13.4995 22.0477 13.5026 21.7903 13.5631C21.5328 13.6236 21.2919 13.7399 21.0844 13.9039C20.9883 13.6333 20.8284 13.3898 20.6183 13.194C20.4082 12.9983 20.154 12.856 19.8773 12.7791C19.6006 12.7023 19.3095 12.6933 19.0285 12.7527C18.7476 12.8121 18.4851 12.9384 18.2632 13.1207C18.2232 13.1523 18.1876 13.1851 18.152 13.2195C18.0286 12.9997 17.8596 12.8087 17.6565 12.6594C17.4533 12.5102 17.2207 12.406 16.974 12.3539C16.7389 12.3046 16.4964 12.3025 16.2605 12.3478C16.0246 12.3932 15.8001 12.485 15.6 12.6179V9.87387C16.5966 9.41866 17.4074 8.63599 17.8974 7.65602C18.3874 6.67606 18.5272 5.55787 18.2935 4.48744C18.0598 3.417 17.4666 2.45884 16.6127 1.77231C15.7588 1.08577 14.6957 0.712255 13.6 0.713872H4.8C3.52696 0.713872 2.30606 1.21959 1.40589 2.11976C0.505713 3.01993 0 4.24083 0 5.51387C0 6.78691 0.505713 8.00781 1.40589 8.90798C2.30606 9.80816 3.52696 10.3139 4.8 10.3139H11.9952L11.9896 14.8295L10.56 12.4023C10.3589 12.0607 10.051 11.7949 9.68374 11.6458C9.31652 11.4967 8.91043 11.4727 8.52817 11.5773C8.1459 11.682 7.80872 11.9096 7.56868 12.2249C7.32863 12.5403 7.19907 12.9259 7.2 13.3223C7.2015 13.6101 7.26997 13.8935 7.4 14.1503L11.53 22.1219C11.9332 22.9042 12.5444 23.5601 13.2964 24.0174C14.0484 24.4747 14.9119 24.7157 15.792 24.7139H19.2C20.4726 24.7125 21.6927 24.2063 22.5926 23.3065C23.4925 22.4066 23.9986 21.1865 24 19.9139V15.3539C24.0046 14.9358 23.8655 14.5289 23.6059 14.2012C23.3463 13.8735 22.982 13.645 22.574 13.5539ZM4.8 9.51387C3.73913 9.51387 2.72172 9.09245 1.97157 8.3423C1.22143 7.59215 0.8 6.57474 0.8 5.51387C0.8 4.45301 1.22143 3.43559 1.97157 2.68545C2.72172 1.9353 3.73913 1.51387 4.8 1.51387H13.6C14.4822 1.50944 15.341 1.79732 16.0422 2.33255C16.7435 2.86777 17.2478 3.62019 17.4762 4.47228C17.7047 5.32437 17.6445 6.22813 17.3051 7.0424C16.9656 7.85666 16.3661 8.53557 15.6 8.97307V6.15387C15.6076 5.81014 15.5165 5.47142 15.3376 5.1778C15.1587 4.88418 14.8995 4.64794 14.5906 4.49701C14.2817 4.34608 13.936 4.28679 13.5944 4.32614C13.2529 4.3655 12.9297 4.50185 12.6632 4.71907C12.4557 4.88748 12.2885 5.10011 12.1738 5.34143C12.059 5.58275 11.9997 5.84666 12 6.11387L11.996 9.51387H4.8ZM23.2 19.9139C23.1988 20.9744 22.777 21.9911 22.0271 22.741C21.2773 23.4909 20.2605 23.9127 19.2 23.9139H15.792C15.0585 23.9155 14.3388 23.7148 13.7121 23.3337C13.0854 22.9526 12.576 22.4059 12.24 21.7539L8.1136 13.7867C8.0403 13.6426 8.00142 13.4835 8 13.3219C7.99905 13.101 8.07093 12.8859 8.20453 12.7099C8.33812 12.534 8.52598 12.407 8.73903 12.3485C8.95208 12.2901 9.17845 12.3035 9.38311 12.3867C9.58777 12.4699 9.75932 12.6182 9.8712 12.8087L12.0432 16.4971C12.0877 16.5727 12.1559 16.6317 12.2372 16.6648C12.3185 16.6979 12.4084 16.7033 12.4931 16.6803C12.5778 16.6572 12.6526 16.6069 12.7058 16.5372C12.7591 16.4674 12.788 16.3821 12.788 16.2943L12.8 6.11387C12.8004 5.96449 12.8341 5.81707 12.8987 5.6824C12.9633 5.54772 13.0573 5.42918 13.1736 5.33545C13.2899 5.24172 13.4257 5.17515 13.571 5.14062C13.7163 5.10609 13.8676 5.10447 14.0136 5.13587C14.2415 5.18972 14.444 5.32024 14.5871 5.50556C14.7303 5.69088 14.8055 5.91976 14.8 6.15387V14.1139C14.8 14.22 14.8421 14.3217 14.9172 14.3967C14.9922 14.4717 15.0939 14.5139 15.2 14.5139C15.3061 14.5139 15.4078 14.4717 15.4828 14.3967C15.5579 14.3217 15.6 14.22 15.6 14.1139C15.6004 13.9645 15.6341 13.8171 15.6987 13.6824C15.7633 13.5477 15.8573 13.4292 15.9736 13.3355C16.0899 13.2417 16.2257 13.1752 16.371 13.1406C16.5163 13.1061 16.6676 13.1045 16.8136 13.1359C17.0415 13.1897 17.244 13.3202 17.3871 13.5056C17.5303 13.6909 17.6055 13.9198 17.6 14.1539V14.5139C17.6 14.62 17.6421 14.7217 17.7172 14.7967C17.7922 14.8717 17.8939 14.9139 18 14.9139C18.1061 14.9139 18.2078 14.8717 18.2828 14.7967C18.3579 14.7217 18.4 14.62 18.4 14.5139C18.4004 14.3645 18.4341 14.2171 18.4987 14.0824C18.5633 13.9477 18.6573 13.8292 18.7736 13.7354C18.8899 13.6417 19.0257 13.5752 19.171 13.5406C19.3163 13.5061 19.4676 13.5045 19.6136 13.5359C19.8415 13.5897 20.044 13.7202 20.1871 13.9056C20.3303 14.0909 20.4055 14.3198 20.4 14.5539V15.3139C20.4 15.42 20.4421 15.5217 20.5172 15.5967C20.5922 15.6717 20.6939 15.7139 20.8 15.7139C20.9061 15.7139 21.0078 15.6717 21.0828 15.5967C21.1579 15.5217 21.2 15.42 21.2 15.3139C21.2004 15.1645 21.2341 15.0171 21.2987 14.8824C21.3633 14.7477 21.4573 14.6292 21.5736 14.5354C21.6899 14.4417 21.8257 14.3752 21.971 14.3406C22.1163 14.3061 22.2676 14.3045 22.4136 14.3359C22.6415 14.3897 22.844 14.5202 22.9871 14.7056C23.1303 14.8909 23.2055 15.1198 23.2 15.3539V19.9139Z"
                                                fill="#FAFAFA"
                                            />
                                            <path
                                                d="M10.48 3.67392L8.35681 6.50512L7.88281 6.03112C7.80737 5.95825 7.70633 5.91794 7.60145 5.91885C7.49657 5.91976 7.39625 5.96183 7.32208 6.03599C7.24792 6.11015 7.20585 6.21048 7.20494 6.31536C7.20403 6.42024 7.24435 6.52128 7.31721 6.59672L8.11721 7.39672C8.19221 7.47174 8.29393 7.5139 8.40001 7.51392H8.42841C8.48565 7.50973 8.54132 7.49327 8.59163 7.46566C8.64194 7.43806 8.68573 7.39995 8.72001 7.35392L11.12 4.15392C11.1837 4.06905 11.211 3.96237 11.196 3.85735C11.181 3.75233 11.1249 3.65757 11.04 3.59392C10.9551 3.53027 10.8485 3.50293 10.7434 3.51794C10.6384 3.53294 10.5437 3.58905 10.48 3.67392Z"
                                                fill="#FAFAFA"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_2692_173">
                                                <rect width="24" height="24" transform="translate(0 0.713867)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </label>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col xs={12} md={12} lg={7}>
                    <div className={cx('footer-content-right')}>
                        <div className={cx('footer-content-right-col')}>
                            <div className={cx('content-right-title')}>Công Ty</div>
                            <div className={cx('content-right-item')}>Về chúng tôi</div>
                            <div className={cx('content-right-item')}>Dịch vụ</div>
                            <div className={cx('content-right-item')}>Sản phẩm</div>
                            <div className={cx('content-right-item')}>Tin tức & Thị trường</div>
                            <div className={cx('content-right-item')}>Nhân lực</div>
                        </div>
                        <div className={cx('footer-content-right-col')}>
                            <div className={cx('content-right-title')}>Dịch vụ</div>
                            <div className={cx('content-right-item')}>Logistic</div>
                            <div className={cx('content-right-item')}>Giải pháp kinh doanh hàng hóa quốc tế</div>
                            <div className={cx('content-right-item')}>Outsourcing về hàng hóa</div>
                        </div>
                        <div className={cx('footer-content-right-col')}>
                            <div className={cx('content-right-title')}>Liên lạc</div>
                            <div className={cx(['content-number', 'content-right-contact'])}>
                                <img className={cx('content-item')} src={imagePhone} alt="" />
                                <div className={cx('list-number')}>
                                    <div className={cx('item-number')}>+84 124.567.888</div>
                                    <div>(8:30 - 17:30)</div>
                                </div>
                            </div>
                            <div className={cx(['content-email', 'content-right-contact'])}>
                                <img className={cx('content-item')} src={imageMail} alt=" " />
                                <div className={cx('item-number')}>hbhfbdh@gmail.com</div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            <div className={cx('footer-line')}></div>
            <div className={cx('footer-link')}>
                <div className={cx('footer-link-text')}>All rights reserved.</div>
                <div className={cx('footer-link-img')}>
                    <img src={imageSocialNetwork} alt="" />
                </div>
            </div>
            <div className={cx('footer-up')}>
                <Button href={'#'}>
                    <img src={imageFooterUp} alt="Return" />
                </Button>
            </div>
        </div>
    );
}

export default Footer;
