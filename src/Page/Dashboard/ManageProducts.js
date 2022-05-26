import React, { useEffect, useState } from 'react';
import DeleteConfirmModal from './DeleteConfirmModal';
import ManageRow from './ManageRow';
const ManageProducts = () => {


    const [deletingProduct, setDeletingProduct] = useState(null)


    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products', {

            method: 'GET',

            headers: {

                authorization: `Bearer ${localStorage.getItem('accessToken')}`

            }

        })
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })

    }, [products])





    return (
        <div >
            <h2 className="text-2xl">Manage products:{products.length}</h2>

            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Image</th>
                            <th>product name</th>
                            <th>Delete Order</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            products.map((product, index) => <ManageRow
                                key={product._id}
                                product={product} index={index}
                                setDeletingProduct={setDeletingProduct}>

                            </ManageRow>)
                        }

                    </tbody>
                </table>
            </div>

            {
                deletingProduct && <DeleteConfirmModal
                    setDeletingProduct={setDeletingProduct} deletingProduct={deletingProduct} ></DeleteConfirmModal>
            }


        </div>
    );
};

export default ManageProducts;