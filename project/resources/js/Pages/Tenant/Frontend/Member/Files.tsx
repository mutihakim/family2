import React from 'react';

import MemberPage from '../../../../Components/Common/MemberPage';
import TenantMemberLayout from '../../../../Layouts/TenantMemberLayout';
import PremiumFileManager from '../Components/PremiumFileManager';

interface Props { tenantName: string; tenantSlug: string; member?: any; demo: any; }

const FilesPage: React.FC<Props> = ({ demo }) => (
    <MemberPage title="Dokumen Penting" parentLabel="Konten">
        <PremiumFileManager files={demo.files} />
    </MemberPage>
);

(FilesPage as any).layout = (page: React.ReactNode) => <TenantMemberLayout>{page}</TenantMemberLayout>;

export default FilesPage;

