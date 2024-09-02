import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx("wrapper")}>
            <img className={cx('avatar')} src="https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/72394cee73ee2bbd22f09a6f370cc13e.jpeg?lk3s=a5d48078&nonce=190&refresh_token=2f77c6ef62d5451ef387afa64c0cf71a&x-expires=1725462000&x-signature=FqtQxsMyoqarzFHIbmEM2%2FsMVRs%3D&shp=a5d48078&shcp=81f88b70" alt="avatar" />
            <div className={cx("info")}>
                <p className={cx("name")}>
                    <span>Nguyen van a</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx("username")}>@nguyenvana</p>
            </div>
        </div>
    )
}

export default AccountItem;