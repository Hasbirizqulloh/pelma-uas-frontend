import React from 'react';
import { IoChatbubblesOutline } from 'react-icons/io5';
import { Container, Row, Col } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { listKomunitas } from '../data/index';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

const ListKomunitas = () => {
  return (
    <div className="list-komunitas">
      <Container className="mt-4">
        <Row>
          <Col>
            <h4>
              <IoChatbubblesOutline /> Komunitas
            </h4>
          </Col>
        </Row>
        <Row>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              992: {
                slidesPerView: 2,
                spaceBetween: 50,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {listKomunitas.map((data) => {
              return (
                <SwiperSlide key={data.id}>
                  <Card className="shadow-sm rounded-4">
                    <Card.Header>{data.name}</Card.Header>
                    <Card.Body>
                      <Card.Title>img</Card.Title>
                      <Card.Text>{data.desc}</Card.Text>
                      <Button variant="primary">Lihat</Button>
                    </Card.Body>
                  </Card>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Row>
      </Container>
    </div>
  );
};

export default ListKomunitas;
