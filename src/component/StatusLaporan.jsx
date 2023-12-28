import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IoChatbubblesOutline } from 'react-icons/io5';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { getReport } from '../features/authSlices.js';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

const StatusLaporan = () => {
  const [reports, setReports] = useState([]);
  const token = localStorage.getItem('Authorization');

  useEffect(() => {
    getReport((data) => {
      setReports(data);
    }, token);
  }, []);

  return (
    <div className="list-komunitas">
      <Container className="mt-1">
        <Row>
          <Col>
            <h4>
              <IoChatbubblesOutline /> Status Laporan
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
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {reports.map((report, index) => {
              return (
                <SwiperSlide key={report.id}>
                  <Card className="shadow-sm rounded-4">
                    <Card.Header>Laporan Anda</Card.Header>
                    <Card.Body>
                      <Card.Title>{report.report}</Card.Title>
                      <Card.Text>{report.user.nama}</Card.Text>
                      <Button variant="primary">{report.status}</Button>
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

export default StatusLaporan;
