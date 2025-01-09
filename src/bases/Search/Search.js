import classNames from 'classnames/bind';
import { faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Search.module.scss';
import { useTranslation } from 'react-i18next';

const cx = classNames.bind(styles); //bind để khi đặt tên scss có dấu -

function Search() {
    const { t } = useTranslation();
    return (
        //Warning của Tippy nên phải thêm div
        <div>
            <HeadlessTippy interactive>
                <div className={cx('search')}>
                    <input placeholder={t('search')} spellCheck={false} />

                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
