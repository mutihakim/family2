import React from 'react';

import MemberPage from '../../../../Components/Common/MemberPage';
import TenantMemberLayout from '../../../../Layouts/TenantMemberLayout';
import PremiumRewards from '../Components/PremiumRewards';

interface Props { tenantName: string; tenantSlug: string; member?: any; demo: any; }

const RewardsPage: React.FC<Props> = ({ demo }) => (
    <MemberPage title="Reward Store" parentLabel="Tugas & Reward">
        <PremiumRewards rewards={demo.rewards} leaderboard={demo.leaderboard} />
    </MemberPage>
);

(RewardsPage as any).layout = (page: React.ReactNode) => <TenantMemberLayout>{page}</TenantMemberLayout>;

export default RewardsPage;

