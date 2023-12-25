import { writable, type Writable, get } from 'svelte/store';
import { persist, localStorage } from '../persist';
import Holiday2023 from './Holiday2023.svelte';

interface Promotion {
  id: string;
  startDate: Date;
  endDate: Date;
  component: ConstructorOfATypedSvelteComponent;
}

const promotions: Promotion[] = [
  {
    id: 'holiday-2023',
    startDate: new Date('2023-11-27'),
    endDate: new Date('2024-01-01'),
    component: Holiday2023
  }
];

export const dismissPromotion = (id?: string): void => {
  if (!id) {
    return;
  }
  dismissedPromotionsStore.update((dismissedIDs: string[]) => {
    dismissedIDs.push(id);
    return dismissedIDs;
  });
};

const dismissedPromotionsStore: Writable<string[]> = persist(
  writable([]),
  localStorage(),
  'dismissedPromotions'
);

export const getActivePromotion = (): Promotion | undefined => {
  const dismissedPromotions = get(dismissedPromotionsStore);
  const now = new Date();
  return promotions
    .filter(
      (p: Promotion) =>
        p.startDate <= now && p.endDate >= now && !dismissedPromotions.includes(p.id)
    )
    .sort((a: Promotion, b: Promotion) => b.endDate.getTime() - a.endDate.getTime())
    .pop();
};
