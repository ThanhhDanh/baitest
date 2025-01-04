import classNames from 'classnames/bind';
import styles from './Edit.module.scss';
import { Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

const cx = classNames.bind(styles);

function Edit() {
    const nav = useNavigate();
    const { id } = useParams();
    const [name, setName] = useState('');
    const [link, setLink] = useState('');
    const [description, setDescription] = useState('');
    const [createdAt, setCreatedAt] = useState('');
    const [imagePreview, setImagePreview] = useState(null);
    const [errors, setErrors] = useState({});
    const image = useRef();

    // Lấy dữ liệu ban đầu dựa vào id
    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem('data')) || [];
        const itemToEdit = savedData.find((item) => item.id === parseInt(id));

        if (itemToEdit) {
            setName(itemToEdit.name);
            setLink(itemToEdit.link);
            setDescription(itemToEdit.description);
            setCreatedAt(itemToEdit.createdAt);
            setImagePreview(itemToEdit.image);
        } else {
            alert('Item not found!');
            nav('/');
        }
    }, [id, nav]);

    // Cập nhật hình ảnh
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

    // Xử lý khi nhấn nút Edit
    const handleEdit = () => {
        const newErrors = {};

        // Kiểm tra các trường
        if (!name.trim()) newErrors.name = 'Name is required.';
        const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
        if (!urlPattern.test(link.trim())) {
            newErrors.link = 'Invalid URL.';
        }
        if (!description.trim()) newErrors.description = 'Description is required.';
        if (!createdAt.trim()) newErrors.createdAt = 'CreatedAt is required.';

        // Nếu có lỗi, lưu lỗi và không cho submit
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        // Cập nhật dữ liệu trong localStorage
        const savedData = JSON.parse(localStorage.getItem('data')) || [];
        const updatedData = savedData.map((item) =>
            item.id === parseInt(id)
                ? {
                      ...item,
                      name,
                      link,
                      description,
                      createdAt,
                      image: imagePreview,
                  }
                : item,
        );

        localStorage.setItem('data', JSON.stringify(updatedData));
        alert('Item updated successfully!');
        nav('/');
    };

    return (
        <div className={cx('container')}>
            <div className={cx('title')}>Edit</div>
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
                        type="file"
                        accept="image/*"
                        className={cx('input')}
                        onChange={handleImageChange}
                    />
                    {errors.image && <p className={cx('error')}>{errors.image}</p>}
                    {imagePreview && (
                        <div className={cx('image-preview')}>
                            <img src={imagePreview} alt="Preview" className={cx('image')} />
                        </div>
                    )}
                </div>
            </div>
            <div className={cx('btn')}>
                <Button className={cx('delete-btn')} onClick={() => nav('/')}>
                    Cancel
                </Button>
                <Button className={cx('create-btn')} onClick={handleEdit}>
                    Save
                </Button>
            </div>
        </div>
    );
}

export default Edit;
