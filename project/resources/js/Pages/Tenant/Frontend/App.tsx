import React from 'react';
import { Head } from '@inertiajs/react';
import { Card, Col, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import TenantFrontendLayout from '../../../Layouts/TenantFrontendLayout';

interface Props {
    tenantName: string;
    member?: any;
}

const App: React.FC<Props> = ({ tenantName, member }) => {
    const { t } = useTranslation();

    return (
        <TenantFrontendLayout>
            <Head title={`${tenantName} - Dashboard`} />

            <div className="profile-foreground position-relative mx-n4 mt-n4">
                <div className="full-v-height bg-primary bg-overlay-pattern opacity-50" style={{ height: '240px' }}></div>
            </div>

            <div className="pt-4 mb-4 mb-lg-3 pb-lg-4 profile-wrapper">
                <Row className="g-4 align-items-center">
                    <Col>
                        <div className="p-2">
                            <h3 className="text-white mb-1">Selamat Datang, {member?.full_name || 'Member'}!</h3>
                            <p className="text-white-50">Senang melihat Anda kembali di ruang keluarga {tenantName}.</p>
                        </div>
                    </Col>
                </Row>
            </div>

            <Row className="g-4">
                <Col lg={4}>
                    <Card className="border-0 shadow-sm h-100 card-animate border-start border-start-width-3 border-primary">
                        <Card.Body className="p-4">
                            <div className="d-flex align-items-center mb-3">
                                <div className="avatar-sm flex-shrink-0">
                                    <div className="avatar-title bg-soft-primary text-primary rounded-circle fs-20">
                                        <i className="ri-calendar-event-fill"></i>
                                    </div>
                                </div>
                                <div className="flex-grow-1 ms-3">
                                    <h5 className="fw-bold mb-0">Agenda Keluarga</h5>
                                </div>
                            </div>
                            <p className="text-muted small mb-0">Lihat jadwal kegiatan keluarga mendatang di sini agar tidak ketinggalan momen penting.</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4}>
                    <Card className="border-0 shadow-sm h-100 card-animate border-start border-start-width-3 border-success">
                        <Card.Body className="p-4">
                            <div className="d-flex align-items-center mb-3">
                                <div className="avatar-sm flex-shrink-0">
                                    <div className="avatar-title bg-soft-success text-success rounded-circle fs-20">
                                        <i className="ri-image-2-fill"></i>
                                    </div>
                                </div>
                                <div className="flex-grow-1 ms-3">
                                    <h5 className="fw-bold mb-0">Galeri Foto</h5>
                                </div>
                            </div>
                            <p className="text-muted small mb-0">Berbagi dan lihat kembali kenangan manis bersama seluruh anggota keluarga.</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4}>
                    <Card className="border-0 shadow-sm h-100 card-animate border-start border-start-width-3 border-info">
                        <Card.Body className="p-4">
                            <div className="d-flex align-items-center mb-3">
                                <div className="avatar-sm flex-shrink-0">
                                    <div className="avatar-title bg-soft-info text-info rounded-circle fs-20">
                                        <i className="ri-megaphone-fill"></i>
                                    </div>
                                </div>
                                <div className="flex-grow-1 ms-3">
                                    <h5 className="fw-bold mb-0">Pengumuman</h5>
                                </div>
                            </div>
                            <p className="text-muted small mb-0">Baca pembaruan dan kabar terbaru yang dibagikan oleh pengelola keluarga.</p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Card className="mt-5 border-0 shadow-lg p-4 text-center bg-primary text-white overflow-hidden position-relative">
                <div className="bg-overlay bg-overlay-pattern opacity-10"></div>
                <Card.Body className="py-5 position-relative">
                    <h3 className="fw-bold mb-3 text-white">Butuh Bantuan?</h3>
                    <p className="mb-4 opacity-75">Hubungi administrator keluarga Anda untuk bantuan teknis atau informasi lebih lanjut.</p>
                    <button className="btn btn-light px-4 py-2 rounded-pill fw-bold text-primary shadow-sm">
                        <i className="ri-customer-service-2-line align-middle me-1"></i> Kontak Admin
                    </button>
                </Card.Body>
            </Card>
        </TenantFrontendLayout>
    );
};

export default App;
