import Accordion from './Accordion';

export default function Accordion1() {
  const data = [
    { id: 'alksdjf', label: 'Click here for some great advice', 
      content: `When the world gives you lemons, make lemonade
        But don't get it in your eye.`
    },
    { id: 'laksejrrna', label: 'Ancient wisdom', 
      content: `Drinking goat's milk at midnight, will keep
        you and your family in perfect health.`
    },
    { id: 'poioasndc', label: 'Modern wisdom', 
      content: `Make time to stop and smell the roses,
        don't forget to touch grass`
    }
  ];

  return (
    <div>
      <Accordion data={data} />
    </div>
  );
}
