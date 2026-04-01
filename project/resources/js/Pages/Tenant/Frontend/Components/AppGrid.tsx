import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const AppGrid = () => {
    const apps = [
        {
            title: "Agenda Keluarga",
            desc: "Jadwal kumpul, ulang tahun, dan acara penting lainnya.",
            icon: "ri-calendar-todo-fill",
            color: "primary",
            items: ["Buka Puasa Bersama - 18 April", "Arisan Keluarga - 25 April"]
        },
        {
            title: "Galeri Kenangan",
            desc: "Simpan dan bagikan foto-foto momen kebersamaan.",
            icon: "ri-image-2-fill",
            color: "success",
            items: ["Album Liburan Jogja 2023", "Foto Lebaran Kemarin"]
        },
        {
            title: "Pengumuman",
            desc: "Info penting dari kepala keluarga atau admin.",
            icon: "ri-megaphone-fill",
            color: "info",
            items: ["Info Renovasi Rumah Nenek", "Jadwal Vaksin Booster"]
        }
    ];

    return (
        <section className="section bg-light py-5" id="apps">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={8}>
                        <div className="text-center mb-5">
                            <h2 className="mb-3 fw-bold">Aplikasi Keluarga Anda</h2>
                            <p className="text-muted fs-16">Pilih layanan yang ingin Anda akses hari ini.</p>
                        </div>
                    </Col>
                </Row>
                <Row className="g-4">
                    {apps.map((app, index) => (
                        <Col lg={4} md={6} key={index}>
                            <Card className="border-0 shadow-sm h-100 card-animate overflow-hidden">
                                <Card.Body className="p-4">
                                    <div className="d-flex align-items-center mb-4">
                                        <div className="avatar-sm flex-shrink-0">
                                            <div className={`avatar-title bg-soft-${app.color} text-${app.color} rounded-circle fs-24`}>
                                                <i className={app.icon}></i>
                                            </div>
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <h5 className="fw-bold mb-0">{app.title}</h5>
                                        </div>
                                    </div>
                                    <p className="text-muted mb-4">{app.desc}</p>

                                    <h6 className="fs-13 text-uppercase fw-semibold mb-3">Terbaru:</h6>
                                    <ul className="list-unstyled vstack gap-2 mb-0">
                                        {app.items.map((item, i) => (
                                            <li key={i} className="d-flex align-items-center text-muted fs-14">
                                                <i className="ri-checkbox-circle-fill text-success me-2"></i> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </Card.Body>
                                <div className="card-footer bg-transparent border-0 p-4 pt-0">
                                    <button className={`btn btn-link text-${app.color} fw-semibold p-0 text-decoration-none`}>
                                        Buka Aplikasi <i className="ri-arrow-right-line align-middle ms-1"></i>
                                    </button>
                                </div>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default AppGrid;
