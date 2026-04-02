import React from 'react';

import MemberPage from '../../../../Components/Common/MemberPage';
import TenantMemberLayout from '../../../../Layouts/TenantMemberLayout';
import PremiumWAHub from '../Components/PremiumWAHub';

interface Props { tenantName: string; tenantSlug: string; member?: any; demo: any; }

const WAPage: React.FC<Props> = ({ demo }) => (
    <MemberPage title="Integrasi WhatsApp" parentLabel="Modul Utama">
        <PremiumWAHub wa_logs={demo.wa_logs} wa_commands={demo.wa_commands} />
    </MemberPage>
);

(WAPage as any).layout = (page: React.ReactNode) => <TenantMemberLayout>{page}</TenantMemberLayout>;

export default WAPage;

