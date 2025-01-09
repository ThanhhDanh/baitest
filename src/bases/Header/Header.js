import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import styles from './Header.module.scss';
import { config } from '../../routes/routes';
import Button from '../../common/Button/Button';
import image from '../../assets/images/K&A.png';
import MenuDropDown from '../../common/Menu/MenuDropDown/MenuDropDown';
import { faEarthAsia } from '@fortawesome/free-solid-svg-icons/faEarthAsia';
import Search from '../Search/Search';
const cx = classNames.bind(styles);

function Header() {
    const nav = useNavigate();
    const { t, i18n } = useTranslation();

    //Thay đổi ngôn ngữ
    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    const MENU_ITEMS = [
        {
            id: 3,
            icon: <FontAwesomeIcon className={cx('icon')} icon={faEarthAsia} />,
            description: t('language'),
            children: {
                title: t('language'),
                data: [
                    {
                        id: 3,
                        type: 'language',
                        code: 'en',
                        description: t('english'),
                        active: i18n.language === 'en',
                        onClick: () => changeLanguage('en'),
                    },
                    {
                        id: 4,
                        type: 'language',
                        code: 'vi',
                        description: t('vietnamese'),
                        active: i18n.language === 'vi',
                        onClick: () => changeLanguage('vi'),
                    },
                ],
            },
        },
    ];

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('infos')}>
                    <Tippy delay={[0, 200]} content={t('welcome')} placement="bottom">
                        <img onClick={() => nav('/')} className={cx('info-image')} src={image} alt="Bảo Trì Thiết Bị" />
                    </Tippy>
                </Link>

                <div className={cx('navbar-menu')}>
                    <div className={cx('menu')}>
                        <div className={cx('menu-items')}>
                            <Button onClick={() => nav('/')} className={cx('menu-item')}>
                                {t('home')}
                            </Button>
                            <Button onClick={() => nav('/gioithieu')} className={cx('menu-item')}>
                                {t('introduce')}
                            </Button>
                            <Button className={cx('menu-item')}>{t('posts')}</Button>
                            <Button className={cx('menu-item')}>{t('contact')}</Button>
                        </div>
                    </div>
                </div>
                <div className={cx('navbar-menu')}>
                    <Search />
                    <MenuDropDown items={MENU_ITEMS}>
                        <button className={cx('menu-item')}>
                            <span className={cx('menu-title')}>{t('language')}</span>
                            <FontAwesomeIcon className={cx('menu-icon')} icon={faChevronDown} />
                        </button>
                    </MenuDropDown>
                </div>
            </div>
        </div>
    );
}

export default Header;
