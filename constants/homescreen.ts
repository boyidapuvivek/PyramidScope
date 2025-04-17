import Hospital from '~/assets/images/icons/hospital.svg'
import Done from '~/assets/images/icons/done.svg'
import Warning from '~/assets/images/icons/warning.svg'

export const homeScreen = {
    inspectionData: [
      {
        Icon : Hospital,
        title: 'City General Hospital',
        subTitle: '123 Healthcare Ave',
        status: 'Pending',
        progress: 0.75,
        timeLineStatus: 1,
      },
      {
        Icon : Hospital,
        title: 'Apollo Hospital',
        subTitle: '123 Healthcare Ave',
        status: 'In Progress',
        progress: 0.45,
        timeLineStatus: 1,
      },
      {
        Icon : Hospital,
        title: 'Kims Hospital',
        subTitle: '123 Healthcare Ave',
        status: 'Completed',
        progress: 1.0,
        timeLineStatus: 1,
      },
      {
        Icon : Hospital,
        title: '7 Hills Hospital',
        subTitle: '123 Healthcare Ave',
        status: 'Pending',
        progress: 0.23,
        timeLineStatus: 1,
      },
    ],
    recentReportsData: [
      {
        title: 'Safety Inspection',
        date: 'Jan 15, 2024',
        status: 'Completed',
        Icon : Done,
        color: '#DCFCE7',
        textColor: '#16A34A',
      },
      {
        title: 'Structure Review',
        date: 'Jan 14, 2024',
        status: 'Pending',
        Icon : Warning,
        color: '#FFEDD5',
        textColor: '#F97316',
      },
      {
        title: 'Safety Inspection',
        date: 'Jan 15, 2024',
        status: 'Completed',
        Icon : Done,
        color: '#DCFCE7',
        textColor: '#16A34A',
      },
      {
        title: 'Structure Review',
        date: 'Jan 14, 2024',
        status: 'Pending',
        Icon : Warning,
        color: '#FFEDD5',
        textColor: '#EA580C',
      },
    ],
    notifications: [
      {
        id: 1,
        title: 'Fire Exit Blockage',
        location: 'Downtown Mall',
        time: '2 hours ago',
        priority: 'Critical',
      },
      {
        id: 2,
        title: 'Maintenance Required',
        location: 'East Wing',
        time: '5 hours ago',
        priority: 'High',
      },
      {
        id: 3,
        title: 'Fire Exit Blockage',
        location: 'Downtown Mall',
        time: '2 hours ago',
        priority: 'Critical',
      },
      {
        id: 4,
        title: 'Maintenance Required',
        location: 'East Wing',
        time: '5 hours ago',
        priority: 'High',
      },
    ],
    data: [
      { title: 'Fire Safety', fill: 85, tintColor: '#EF4444' },
      { title: 'Zoning', fill: 92, tintColor: '#3B82F6' },
      { title: 'Environmental', fill: 78, tintColor: '#22C55E' },
    ],
  };
  