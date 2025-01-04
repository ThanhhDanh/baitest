import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { Button, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function Home() {
    const nav = useNavigate();
    const [data, setData] = useState([]);

    useEffect(() => {
        // Đọc dữ liệu từ localStorage
        const savedData = JSON.parse(localStorage.getItem('data')) || [];
        setData(savedData);
    }, []);

    const handleEdit = (id) => {
        nav(`/edit/${id}`);
    };

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this item?')) {
            const updatedData = data.filter((item) => item.id !== id);
            setData(updatedData);
            localStorage.setItem('data', JSON.stringify(updatedData));
        }
    };

    return (
        <div className={cx('container')}>
            <div className={cx('create')}>
                <Button onClick={() => nav('/create')} className={cx('create-btn')}>
                    Create
                </Button>
            </div>
            <Table className={cx('table')} bordered hover>
                <thead className={cx('thead-dark')}>
                    <tr>
                        <th>ID</th>
                        <th>Code</th>
                        <th>Name</th>
                        <th>Link</th>
                        <th>Description</th>
                        <th>CreatedAt</th>
                        <th>Image</th>
                        <th>#</th>
                        <th>#</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length > 0 ? (
                        data.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.code}</td>
                                <td>{item.name}</td>
                                <td>{item.link}</td>
                                <td>{item.description}</td>
                                <td>{item.createdAt}</td>
                                <td>
                                    <img className={cx('image')} src={item.image} alt={item.name} />
                                </td>
                                <td>
                                    <Button onClick={() => handleEdit(item.id)} className={cx('edit-btn')}>
                                        Edit
                                    </Button>
                                </td>
                                <td>
                                    <Button onClick={() => handleDelete(item.id)} className={cx('delete-btn')}>
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={9}>
                                <div className={cx(['d-flex', 'align-items-center', 'justify-content-center'])}>
                                    No items
                                    <Button
                                        className={classNames(cx('ms-3'), cx('link-create'))}
                                        onClick={() => nav('/create')}
                                    >
                                        Let's create
                                    </Button>
                                </div>
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
    );
}

export default Home;
