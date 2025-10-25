export interface Recipe {
  id: number;
  markdown: string;
}

export const recipes: Recipe[] = [
  {
    id: 1,
    markdown: `
# Spaghetti Carbonara  
*Classic Italian pasta dish with creamy sauce.*

## Ingredients
- 200g spaghetti  
- 100g pancetta  
- 2 large eggs  
- 50g Parmesan cheese, grated  
- Salt and black pepper to taste  

## Instructions
1. Cook spaghetti in salted water until al dente.  
2. Fry pancetta until crispy.  
3. Whisk eggs and cheese in a bowl.  
4. Drain pasta and mix with pancetta, then add egg mixture off heat.  
5. Season and serve immediately.  

### Notes / Tips
- Use Pecorino Romano for stronger flavor.  
- Do not scramble the eggs.  

### Serving Size
- Servings: 2  
- Per person: 1 plate  

### Macros
- Calories: 550  
- Protein: 25g  
- Carbs: 60g  
- Fat: 22g  
`,
  },
  {
    id: 2,
    markdown: `
# Avocado Toast  

## Ingredients
- 2 slices whole-grain bread  
- 1 ripe avocado  
- Salt and pepper to taste  
- Chili flakes (optional)  

## Instructions
1. Toast the bread until golden.  
2. Mash avocado and spread evenly on toast.  
3. Season with salt, pepper, and chili flakes.  

### Serving Size
- Servings: 1  
- Per person: 2 slices  

### Macros
- Calories: 320  
- Protein: 8g  
- Carbs: 28g  
- Fat: 20g  
`,
  },
  {
    id: 3,
    markdown: `
# Chicken Stir-Fry  
*Quick, colorful, and protein-rich dish.*

## Ingredients
- 300g chicken breast, sliced  
- 1 bell pepper, sliced  
- 1 onion, sliced  
- 2 tbsp soy sauce  
- 1 tbsp olive oil  
- 1 tsp cornstarch  
- 2 cloves garlic, minced  

## Instructions
1. Mix soy sauce and cornstarch to coat chicken.  
2. Heat oil in a wok and stir-fry chicken until golden.  
3. Add garlic, onion, and bell pepper; cook 3–4 minutes.  
4. Toss everything together and serve hot.  

### Notes / Tips
- Add chili or sesame oil for extra flavor.  
- Works well with rice or noodles.  

### Serving Size
- Servings: 2  
- Per person: 1 bowl  

### Macros
- Calories: 420  
- Protein: 40g  
- Carbs: 15g  
- Fat: 18g  
`,
  },
  {
    id: 4,
    markdown: `
# Banana Pancakes  
*Fluffy, naturally sweet breakfast pancakes.*

## Ingredients
- 1 ripe banana  
- 2 eggs  
- 1/4 cup oats  
- 1/2 tsp cinnamon  
- Butter or oil for cooking  

## Instructions
1. Mash banana in a bowl.  
2. Add eggs, oats, and cinnamon; mix well.  
3. Heat pan, add butter, and pour batter to form pancakes.  
4. Cook until golden on both sides.  

### Notes / Tips
- Top with honey or berries.  
- Gluten-free if using certified oats.  

### Serving Size
- Servings: 1  
- Per person: 3 pancakes  

### Macros
- Calories: 290  
- Protein: 12g  
- Carbs: 36g  
- Fat: 10g  
`,
  },
];
