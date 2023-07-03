const linkAdmin = [
  {
    link: '/admin/dashboard',
    icon: 'fas fa-chart-bar',
    title: 'DashBoard',
    expend: false,
  },
  {
    link: '/admin/business',
    icon: 'fas fa-building',
    title: 'Business',
    expend: [
      {
        link: '/admin/business/size',
        icon: 'fas fa-building',
        title: 'Size',
      },
      {
        link: '/admin/business/coin-package',
        icon: 'fas fa-building',
        title: 'Coin Package',
      },
    ],
   
  },
  {
    link: '/admin/approve',
    icon: 'fas fa-check',
    title: 'Approve',
    expend: false,
  },
    
  {
    link: '/admin/statistic',
    icon: 'fas fa-chart-pie',
    title: 'Statistic',
    expend: [
      {
        link: '/admin/statistic/post',
        icon: 'fas fa-newspaper',
        title: 'Post',
      },
      {
        link: '/admin/statistic/report',
        icon: 'fas fa-comment',
        title: 'Report violations',
      },
    ],
   
  },
  {
    link: '/admin/logout',
    icon: 'fas fa-sign-out-alt',
    title: 'Logout',
    expend: false,
  },
];

export default linkAdmin;
