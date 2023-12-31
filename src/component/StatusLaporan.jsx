import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IoChatbubblesOutline } from 'react-icons/io5';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { getReport } from '../features/authSlices.js';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import DetailLaporan from './DetailLaporan.jsx';

const StatusLaporan = () => {
  const [reports, setReports] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const token = localStorage.getItem('Authorization');

  useEffect(() => {
    getReport((data) => {
      setReports(data);
      setIsloading(false);
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
          {isLoading ? <Spinner animation="border" variant="primary" /> : reports.length === 0 ? <h1 className="text-center">Tidak ada laporan</h1> : null}
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
                      <Card.Text>Nama : {report.user.nama}</Card.Text>
                      <Card.Title>
                        <DetailLaporan reportId={report.id} />
                      </Card.Title>
                      <Card.Text>Status Laporan</Card.Text>
                      <Button variant="primary"> {report.status}</Button>
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
