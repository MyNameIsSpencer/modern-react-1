import Accordion from './Accordion';

export default function Accordion2() {
  const data = [
    { id: 'alsdjfhf', label: 'Click here for some great advice', 
      content: `When the world gives you lemons, make lemonade
        But don't get it in your eye.`
    },
    { id: 'bnlnxhfnd', label: 'Ancient wisdom', 
      content: `Drinking goat's milk at midnight, will keep
        you and your family in perfect health.`
    },
    { id: 'zlkznmejf', label: 'Modern wisdom', 
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
