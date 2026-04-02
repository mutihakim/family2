import React from 'react';

import MemberPage from '../../../../Components/Common/MemberPage';
import TenantMemberLayout from '../../../../Layouts/TenantMemberLayout';
import PremiumCalendar from '../Components/PremiumCalendar';

interface Props { tenantName: string; tenantSlug: string; member?: any; demo: any; }

const CalendarPage: React.FC<Props> = ({ demo }) => (
    <MemberPage title="Kalender & Agenda" parentLabel="Perencanaan">
        <PremiumCalendar calendar={demo.calendar} routines={demo.routines} menus={demo.menus} />
    </MemberPage>
);

(CalendarPage as any).layout = (page: React.ReactNode) => <TenantMemberLayout>{page}</TenantMemberLayout>;

export default CalendarPage;

