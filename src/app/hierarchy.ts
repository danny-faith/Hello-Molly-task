const data: IHierarchyData = [
  {
    name: "Sarah Johnson",
    position: "CEO",
    email: "sarah.johnson@hellomolly.com.au",
    id: "5555",
    children: [
      {
        name: "Michael Davis",
        position: "CFO",
        email: "michael.davis@hellomolly.com.au",
        id: "5556",
        children: [
          {
            name: "Sophia Adams",
            position: "Finance Manager",
            email: "sophia.adams@hellomolly.com.au",
            id: "5557",
            children: [],
          },
          {
            name: "William Harris",
            position: "Financial Analyst",
            email: "william.harris@hellomolly.com.au",
            id: "5558",
            children: [],
          },
          {
            name: "Oliver Turner",
            position: "Accounting Manager",
            email: "oliver.turner@hellomolly.com.au",
            id: "5559",
            children: [],
          },
        ],
      },
      {
        name: "Robert Smith",
        position: "COO",
        email: "robert.smith@hellomolly.com.au",
        id: "5560",
        children: [
          {
            name: "Emily Wilson",
            position: "VP of Operations",
            email: "emily.wilson@hellomolly.com.au",
            id: "5561",
            children: [],
          },
          {
            name: "Daniel Brown",
            position: "Director of Production",
            email: "daniel.brown@hellomolly.com.au",
            id: "5562",
            children: [],
          },
          {
            name: "Sophie Turner",
            position: "Director of Logistics",
            email: "sophie.turner@hellomolly.com.au",
            id: "5563",
            children: [],
          },
          {
            name: "Olivia Lee",
            position: "VP of HR",
            email: "olivia.lee@hellomolly.com.au",
            id: "5564",
            children: [
              {
                name: "Ethan Miller",
                position: "HR Manager",
                email: "ethan.miller@hellomolly.com.au",
                id: "5565",
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
];

export default data;
