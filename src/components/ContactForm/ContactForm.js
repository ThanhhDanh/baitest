import classNames from 'classnames/bind';
import styles from './ContactForm.module.scss';
import { useState } from 'react';
import { Alert, Modal } from 'react-bootstrap';
import emailjs from 'emailjs-com';

const cx = classNames.bind(styles);

function ContactForm({ show, handleClose }) {
    const [formStatus, setFormStatus] = useState(null);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            // Thay thế logic này bằng API thực tế
            await sendEmail(formData);
            setFormStatus('success');
            setFormData({ name: '', email: '', message: '' }); // Reset form

            if (formStatus === 'success') {
                Alert('Thành công', 'Gửi lời nhắn thành công!');
            } else {
                Alert('Thất bại', 'Có lỗi xảy ra. Vui lòng thử lại.');
            }
        } catch (error) {
            console.error('Error sending email:', error);
            setFormStatus('error');
        } finally {
            setLoading(false);
        }
    };

    const sendEmail = async (data) => {
        const templateParams = {
            from_name: data.name,
            from_email: data.email,
            message: data.message,
        };
        return emailjs.send(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            templateParams,
            process.env.REACT_APP_USER_ID,
        );
    };

    return (
        <Modal show={show} onHide={handleClose} centered animation={true}>
            <h2 className={cx('h2')}>Liên hệ với chúng tôi</h2>
            <form className={cx('form')} onSubmit={handleSubmit}>
                <div className={cx('input-item')}>
                    <label className={cx('label')} htmlFor="name">
                        Tên:
                    </label>
                    <input
                        className={cx('input')}
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={cx('input-item')}>
                    <label className={cx('label')} htmlFor="email">
                        Email:
                    </label>
                    <input
                        className={cx('input')}
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label className={cx(['label', 'mb-3'])} htmlFor="message">
                        Lời nhắn:
                    </label>
                    <textarea
                        className={cx('textarea')}
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <button className={cx('button')} type="submit">
                    {loading ? 'Đang gửi...' : 'Gửi'}
                </button>
            </form>
        </Modal>
    );
}

export default ContactForm;
