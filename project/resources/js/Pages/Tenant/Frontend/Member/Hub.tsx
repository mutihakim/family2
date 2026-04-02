import { Link } from '@inertiajs/react';
import React from 'react';
import { Row, Col, Card, Badge } from 'react-bootstrap';

import MemberPage from '../../../../Components/Common/MemberPage';
import TenantMemberLayout from '../../../../Layouts/TenantMemberLayout';

interface Props {
    tenantName: string;
    tenantSlug: string;
    member?: { user?: { name?: string } };
    demo: any;
}

const Hub: React.FC<Props> = ({ tenantName, member, demo }) => {
    const memberName = member?.user?.name ?? 'Anggota';
    const hour = new Date().getHours();
    const greeting = hour < 11 ? 'Selamat Pagi' : hour < 15 ? 'Selamat Siang' : hour < 18 ? 'Selamat Sore' : 'Selamat Malam';

    const totalPoints = (demo?.leaderboard || []).reduce((s: number, l: any) => s + (l.points || 0), 0);

    const modules = [
        { label: 'Kalender', desc: 'Jadwal & agenda', icon: 'ri-calendar-2-line', color: 'primary', href: '/calendar' },
        { label: 'Proyek', desc: 'Papan proyek Kanban', icon: 'ri-kanban-view', color: 'warning', href: '/projects' },
        { label: 'Tugas', desc: 'Rutinitas & to-do', icon: 'ri-checkbox-multiple-line', color: 'success', href: '/tasks' },
        { label: 'Reward', desc: 'Toko hadiah & poin', icon: 'ri-trophy-line', color: 'warning', href: '/rewards' },
        { label: 'Dompet Anak', desc: 'Saldo poin per anak', icon: 'ri-wallet-3-line', color: 'info', href: '/wallet' },
        { label: 'Keuangan', desc: 'Pemasukan & pengeluaran', icon: 'ri-money-dollar-circle-line', color: 'success', href: '/finance' },
        { label: 'Meal Planner', desc: 'Menu & belanja', icon: 'ri-restaurant-2-line', color: 'danger', href: '/kitchen' },
        { label: 'Growth Tracker', desc: 'Tumbuh kembang anak', icon: 'ri-seedling-line', color: 'success', href: '/health' },
        { label: 'Rekam Medis', desc: 'Imunisasi & dokumen', icon: 'ri-medicine-bottle-line', color: 'danger', href: '/medical' },
        { label: 'Inventaris', desc: 'Aset & info rumah', icon: 'ri-home-gear-line', color: 'primary', href: '/assets' },
        { label: 'Wishlist', desc: 'Wisata & kuliner impian', icon: 'ri-heart-3-line', color: 'danger', href: '/leisure' },
        { label: 'Vacation', desc: 'Itinerary & packing', icon: 'ri-suitcase-3-line', color: 'primary', href: '/vacation' },
        { label: 'Game Center', desc: 'Mini-games keluarga', icon: 'ri-gamepad-line', color: 'info', href: '/games' },
        { label: 'WhatsApp', desc: 'WA bot & perintah', icon: 'ri-whatsapp-line', color: 'success', href: '/whatsapp' },
        { label: 'Galeri', desc: 'Album foto keluarga', icon: 'ri-image-line', color: 'info', href: '/gallery' },
        { label: 'Blog', desc: 'Wisata & parenting', icon: 'ri-article-line', color: 'success', href: '/blog' },
        { label: 'File Manager', desc: 'Dokumen penting', icon: 'ri-folder-3-line', color: 'warning', href: '/files' },
    ];

    return (
        <MemberPage title="Member Hub" parentLabel="Dashboard">
            <div className="mb-4">
                <Card className="border-0 shadow-sm overflow-hidden">
                    <Card.Body className="p-0">
                        <div className="p-4" style={{ background: 'linear-gradient(135deg, var(--vz-primary) 0%, #405189 100%)' }}>
                            <Row className="align-items-center g-4">
                                <Col lg={8}>
                                    <h3 className="text-white fw-bold mb-2">{greeting}, {memberName}! 👋</h3>
                                    <p className="text-white-50 mb-0">
                                        Selamat datang kembali di keluarga <strong className="text-white">{tenantName}</strong>. 
                                        Semua modul manajemen rumah tangga Anda siap diakses melalui menu atau shortcut di bawah.
                                    </p>
                                </Col>
                                <Col lg={4} className="text-lg-end">
                                    <div className="d-inline-flex align-items-center gap-3">
                                        <div className="text-center bg-white bg-opacity-10 px-3 py-2 rounded-3 border border-white border-opacity-10">
                                            <div className="text-white fw-bold fs-16">{totalPoints.toLocaleString()}</div>
                                            <div className="text-white-50 fs-11">Poin Keluarga</div>
                                        </div>
                                        <div className="text-center bg-white bg-opacity-10 px-3 py-2 rounded-3 border border-white border-opacity-10">
                                            <div className="text-white fw-bold fs-16">{(demo?.projects || []).length}</div>
                                            <div className="text-white-50 fs-11">Proyek Aktif</div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Card.Body>
                </Card>
            </div>

            <section className="section py-3">
                <h5 className="fw-bold mb-4">Semua Modul ({modules.length})</h5>
                <Row className="g-3">
                    {(demo?.modules || modules).map((mod: any, i: number) => (
                        <Col xs={6} sm={4} md={3} lg={2} key={i}>
                            <Link href={mod.href} className="text-decoration-none">
                                <Card className="border h-100"
                                    style={{ transition: 'transform 0.2s, box-shadow 0.2s', cursor: 'pointer' }}
                                    onMouseEnter={e => {
                                        const el = e.currentTarget as HTMLElement;
                                        el.style.transform = 'translateY(-4px)';
                                        el.style.boxShadow = '0 8px 24px rgba(0,0,0,0.1)';
                                    }}
                                    onMouseLeave={e => {
                                        const el = e.currentTarget as HTMLElement;
                                        el.style.transform = '';
                                        el.style.boxShadow = '';
                                    }}>
                                <Card.Body className="p-3 text-center">
                                    <div className={`rounded-3 mx-auto d-flex align-items-center justify-content-center mb-2 bg-${mod.color}-subtle`}
                                        style={{ width: 48, height: 48 }}>
                                        <i className={`${mod.icon} text-${mod.color} fs-20`}></i>
                                    </div>
                                    <h6 className="fw-semibold mb-0 fs-13">{mod.label}</h6>
                                    <p className="text-muted fs-11 mb-0 mt-1">{mod.desc}</p>
                                </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                    ))}
                </Row>
            </section>

            <section className="section bg-light py-4">
                <Row className="g-4">
                    <Col lg={4}>
                        <Card className="border-0 shadow-sm h-100">
                            <Card.Header className="bg-transparent border-0 pt-3 pb-0 d-flex justify-content-between align-items-center">
                                <h6 className="fw-bold mb-0"><i className="ri-calendar-todo-line text-primary me-2"></i>Agenda Mendatang</h6>
                                <Link href="/calendar" className="btn btn-soft-primary btn-sm">Lihat Semua</Link>
                            </Card.Header>
                            <Card.Body className="pt-2">
                                {(demo?.calendar || []).map((e: any) => (
                                    <div key={e.id} className={`p-2 rounded-3 mb-2 ${e.className?.split(' ')[0] || 'bg-primary-subtle'}`}>
                                        <p className="fw-semibold mb-0 fs-13">{e.title}</p>
                                        <p className="text-muted fs-11 mb-0">
                                            {new Date(e.start).toLocaleDateString('id-ID', { weekday: 'short', day: 'numeric', month: 'short' })}
                                        </p>
                                    </div>
                                ))}
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={4}>
                        <Card className="border-0 shadow-sm h-100">
                            <Card.Header className="bg-transparent border-0 pt-3 pb-0 d-flex justify-content-between align-items-center">
                                <h6 className="fw-bold mb-0"><i className="ri-sun-line text-warning me-2"></i>Rutinitas Hari Ini</h6>
                                <Link href="/tasks" className="btn btn-soft-warning btn-sm">Lihat Semua</Link>
                            </Card.Header>
                            <Card.Body className="pt-2">
                                {[...demo.routines.morning.slice(0, 3), ...demo.routines.night.slice(0, 2)].map((r: any) => (
                                    <div key={r.id} className={`d-flex align-items-center gap-2 mb-2 p-2 rounded-3 ${r.done ? 'bg-success-subtle' : 'border'}`}>
                                        <i className={`${r.done ? 'ri-checkbox-circle-fill text-success' : 'ri-circle-line text-muted'} fs-16 flex-shrink-0`}></i>
                                        <div className="flex-grow-1">
                                            <p className="mb-0 fs-13 fw-medium">{r.task}</p>
                                            <p className="mb-0 fs-11 text-muted">{r.time} · {r.assignee}</p>
                                        </div>
                                        <Badge bg="warning" className="fs-11">+{r.points}</Badge>
                                    </div>
                                ))}
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={4}>
                        <Card className="border-0 shadow-sm h-100">
                            <Card.Header className="bg-transparent border-0 pt-3 pb-0 d-flex justify-content-between align-items-center">
                                <h6 className="fw-bold mb-0"><i className="ri-article-line text-success me-2"></i>Blog Terbaru</h6>
                                <Link href="/blog" className="btn btn-soft-success btn-sm">Lihat Semua</Link>
                            </Card.Header>
                            <Card.Body className="pt-2">
                                {demo.blogs.slice(0, 3).map((b: any) => (
                                    <div key={b.id} className="d-flex gap-3 mb-3">
                                        <img src={b.cover} alt={b.title} className="rounded-2 flex-shrink-0"
                                            style={{ width: 52, height: 44, objectFit: 'cover' }} />
                                        <div>
                                            <p className="fw-semibold fs-13 mb-0">{b.title}</p>
                                            <div className="d-flex gap-2 text-muted fs-11">
                                                <Badge bg="light" text="dark" className="border fs-11">{b.cat}</Badge>
                                                <span>{b.date}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </section>
        </MemberPage>
    );
};

(Hub as any).layout = (page: React.ReactNode) => <TenantMemberLayout>{page}</TenantMemberLayout>;

export default Hub;
