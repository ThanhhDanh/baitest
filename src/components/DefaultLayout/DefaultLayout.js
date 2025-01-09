import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './DefaultLayout.module.scss';
import Header from '../../bases/Header/Header';
import Footer from '../../bases/Footer';
import Aos from 'aos';
import 'aos/dist/aos.css';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    Aos.init();

    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <div data-aos="fade-up" className={cx('content')}>
                    {children}
                </div>
            </div>
            <Footer />
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
