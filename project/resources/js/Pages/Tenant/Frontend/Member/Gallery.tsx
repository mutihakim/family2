import React from 'react';

import MemberPage from '../../../../Components/Common/MemberPage';
import TenantMemberLayout from '../../../../Layouts/TenantMemberLayout';
import PremiumGallery from '../Components/PremiumGallery';

interface Props { tenantName: string; tenantSlug: string; member?: any; demo: any; }

const GalleryPage: React.FC<Props> = ({ demo }) => (
    <MemberPage title="Galeri & Album" parentLabel="Konten">
        <PremiumGallery gallery={demo.gallery} />
    </MemberPage>
);

(GalleryPage as any).layout = (page: React.ReactNode) => <TenantMemberLayout>{page}</TenantMemberLayout>;

export default GalleryPage;

