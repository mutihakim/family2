import React from 'react';

import MemberPage from '../../../../Components/Common/MemberPage';
import TenantMemberLayout from '../../../../Layouts/TenantMemberLayout';
import PremiumWishlist from '../Components/PremiumWishlist';

interface Props { tenantName: string; tenantSlug: string; member?: any; demo: any; }

const LeisurePage: React.FC<Props> = ({ demo }) => (
    <MemberPage title="Liburan & Wishlist" parentLabel="Hiburan">
        <PremiumWishlist wishlists={demo.leisure} />
    </MemberPage>
);

(LeisurePage as any).layout = (page: React.ReactNode) => <TenantMemberLayout>{page}</TenantMemberLayout>;

export default LeisurePage;

