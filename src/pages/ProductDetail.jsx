import React, { useState, useEffect } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'semantic-ui-css/semantic.min.css';
import { Image, Button, Container, Header, Segment } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { addToCart } from "../store/actions/cartActions"
import { toast } from 'react-toastify'

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(undefined);
  const goTo = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/products/${id}`);
        setProduct(response.data);
      } catch (err) {
        setProduct(null);
      }
    };
    fetchProduct();
  }, [id]);

  const handleAddToCard=(product)=>{
    dispatch(addToCart(product))
    toast.success(`${product.title} sepete eklendi!`)
  }

  if (product === undefined) {
    return null; // Veri yüklenirken hiçbir şey gösterme
  }

  if (!product) {
    return <Navigate to="/404" />; // Ürün bulunamazsa 404 sayfasına yönlendir
  }

  return (
    <Container  className="my-5">
      <Segment style={{borderRadius:"5px"}} raised>
      <div style={{ minHeight: '250px' }}> {/* Görsel için yer ayır */}
          <Image style={{borderRadius:"8px"}} src={product.thumbnail} alt="Product" ui={false} centered />
        </div>
          
        <Header as='h2' className="text-center mt-4">{product.title}</Header>
        <Header style={{marginTop:"0px"}} as='h5' disabled> {product.category} </Header>
        <p className="text-center">{product.description}</p>
        <Header as='h4' className="price text-center">Current Price: <span>{product.price}$</span></Header>
        <div className="actions text-center my-3">
          <Button color="green" >Satın Al! &#10084;&#65039;</Button>
          <Button onClick={() => handleAddToCard(product)} primary>Sepete Ekle</Button>
          <Button onClick={() => {goTo("/")}} secondary className="mt-2">Menüye Dön</Button>
        </div>
      </Segment>
    </Container>
  );
};