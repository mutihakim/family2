import React from 'react';

import MemberPage from '../../../../Components/Common/MemberPage';
import TenantMemberLayout from '../../../../Layouts/TenantMemberLayout';
import PremiumFinance from '../Components/PremiumFinance';

interface Props { tenantName: string; tenantSlug: string; member?: any; demo: any; }

const FinancePage: React.FC<Props> = ({ demo }) => (
    <MemberPage title="Keuangan Keluarga" parentLabel="Keuangan">
        <PremiumFinance finance={demo.finance} />
    </MemberPage>
);

(FinancePage as any).layout = (page: React.ReactNode) => <TenantMemberLayout>{page}</TenantMemberLayout>;

export default FinancePage;

