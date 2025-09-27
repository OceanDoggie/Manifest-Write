import { useState } from 'react';
import { Button } from '@/components/ui/button';
import PreviewModal from '../PreviewModal';

export default function PreviewModalExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-8 bg-background min-h-screen">
      <div className="text-center">
        <Button onClick={() => setIsOpen(true)}>
          Open Preview Modal
        </Button>
      </div>
      
      <PreviewModal 
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        worksheetType="affirmation"
        price="$1.49"
      />
    </div>
  );
}