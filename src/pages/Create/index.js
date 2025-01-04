import classNames from 'classnames/bind';
import styles from './Create.module.scss';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';

const cx = classNames.bind(styles);

function Create() {
    const nav = useNavigate();
    const [name, setName] = useState('');
    const [link, setLink] = useState('');
    const [description, setDescription] = useState('');
    const [createdAt, setCreatedAt] = useState('');
    const image = useRef();
    const [imagePreview, setImagePreview] = useState(null);
    const [errors, setErrors] = useState({});

    const handleImageChange = () => {
        const file = image.current.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result); // Lưu chuỗi Base64 vào state
            };
            reader.readAsDataURL(file);
        }
    };

    const handleCreate = () => {
        //Reset lỗi trước khi kiểm tra
        const newErrors = {};

        // Kiểm tra từng trường
        if (!name.trim()) newErrors.name = 'Name is required.';
        const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
        if (!urlPattern.test(link.trim())) {
            newErrors.link = 'Invalid URL.';
        }
        if (!description.trim()) newErrors.description = 'Description is required.';
        if (!createdAt.trim()) newErrors.createdAt = 'CreatedAt is required.';
        if (!image.current || !image.current.files[0]) newErrors.image = 'Image is required.';

        // Nếu có lỗi, lưu lỗi và không cho submit
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        // Đọc dữ liệu cũ từ cookie
        const savedData = JSON.parse(localStorage.getItem('data')) || [];

        // Tạo ID và Code mới
        const newId = savedData.length ? savedData[savedData.length - 1].id + 1 : 1;
        const newCode = newId.toString().padStart(2, '0');

        // Tạo dữ liệu mới
        const newItem = {
            id: newId,
            code: newCode,
            name,
            link,
            description,
            createdAt,
            image: imagePreview,
        };

        // Thêm dữ liệu mới vào mảng
        savedData.push(newItem);

        // Lưu lại vào localStorage
        localStorage.setItem('data', JSON.stringify(savedData));

        // Điều hướng về trang Home
        nav('/');
    };

    return (
        <div className={cx('container')}>
            <div className={cx('title')}>Create New</div>
            <div className={cx('inner')}>
                <div className={cx('input-item')}>
                    <span>Name</span>
                    <input type="text" className={cx('input')} value={name} onChange={(e) => setName(e.target.value)} />
                    {errors.name && <p className={cx('error')}>{errors.name}</p>}
                </div>
                <div className={cx('input-item')}>
                    <span>Link</span>
                    <input type="text" className={cx('input')} value={link} onChange={(e) => setLink(e.target.value)} />
                    {errors.link && <p className={cx('error')}>{errors.link}</p>}
                </div>
                <div className={cx('input-item')}>
                    <span>Description</span>
                    <input
                        type="text"
                        className={cx('input')}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    {errors.description && <p className={cx('error')}>{errors.description}</p>}
                </div>
                <div className={cx('input-item')}>
                    <span>CreatedAt</span>
                    <input
                        type="text"
                        className={cx('input')}
                        value={createdAt}
                        onChange={(e) => setCreatedAt(e.target.value)}
                    />
                    {errors.createdAt && <p className={cx('error')}>{errors.createdAt}</p>}
                </div>
                <div className={cx('input-item')}>
                    <span>Image</span>
                    <input
                        ref={image}
                        required
                        type="file"
                        accept="image/*"
                        className={cx('input')}
                        onChange={handleImageChange}
                    />
                    {errors.image && <p className={cx('error')}>{errors.image}</p>}
                </div>
            </div>
            <div className={cx('btn')}>
                <Button className={cx('delete-btn')} onClick={() => nav('/')}>
                    Cancel
                </Button>
                <Button className={cx('create-btn')} onClick={handleCreate}>
                    Create
                </Button>
            </div>
        </div>
    );
}

export default Create;
