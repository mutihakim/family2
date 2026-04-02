import React from 'react';

import MemberPage from '../../../../Components/Common/MemberPage';
import TenantMemberLayout from '../../../../Layouts/TenantMemberLayout';
import PremiumBlog from '../Components/PremiumBlog';

interface Props { tenantName: string; tenantSlug: string; member?: any; demo: any; }

const BlogPage: React.FC<Props> = ({ demo }) => (
    <MemberPage title="Blog & Parenting" parentLabel="Konten">
        <PremiumBlog blogs={demo.blogs} />
    </MemberPage>
);

(BlogPage as any).layout = (page: React.ReactNode) => <TenantMemberLayout>{page}</TenantMemberLayout>;

export default BlogPage;


