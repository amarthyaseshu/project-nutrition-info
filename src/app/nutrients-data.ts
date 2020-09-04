// required data of different nutrients
import { nutrientsInterface } from './nutrients-interface';
export const nutrientsData: nutrientsInterface[] = [
  {
    image: '../../assets/vit-a.jpg',
    name: 'Vitamin A',
    scientific_name: 'Retinol',
    description:
      'Vitamin A is a fat-soluble vitamin. Its physiological role is related to vision and maintenance of epithelial tissue. It is a powerful antioxidant and acts as a hormone in the body, affecting the expression of genes. It also helps the heart, lungs, kidneys, and other organs to function correctly. Pregnant women and those in developing countries are most at risk of vitamin A deficiency.',
    essential_for: 'Eyes',
    foods:
      'meat liver, fish, eggs, butter, cheese, milk, orange, pumpkin, carrot, sweet potatoes, papayas, mangoes.',
    url: 'https://en.wikipedia.org/wiki/Vitamin_A',
  },
  {
    image: '../../assets/vit-d.jpg',
    name: 'Vitamin D',
    scientific_name: 'Cholecalciferol',
    description:
      'Vitamin D is essential for several reasons, including maintaining healthy bones and teeth. It may also protect against a range of diseases and conditions, such as type 1 diabetes. Supporting immune, brain, and nervous system health, regulating insulin levels and supporting diabetes management, supporting lung function.',
    essential_for:
      'Skin,Teeth,Bones,Growth,Muscle,During Pregnancy,Covid-19 Fight',
    foods:
      'sunlight, fatty fish such as salmon, egg yolks, cheese, mushrooms, fortified milk, fortified cereals and juices',
    url: 'https://en.wikipedia.org/wiki/Vitamin_D',
  },
  {
    image: '../../assets/vit-e.jpg',
    name: 'Vitamin E',
    scientific_name: 'α-tocopherol',
    description:
      'Vitamin E is a powerful antioxidant that may help protect cells from free radical damage. Getting enough vitamin E may also help reduce the risk of a range of conditions, including cancer, cardiovascular disease, and cognitive decline. According to research from 2015, vitamin E can also improve skin health by reducing collagen breakdown and free radical damage in the skin. Aside from its role as an antioxidant.',
    essential_for: 'Skin,Growth,Immunity,Muscle',
    foods:
      'nuts, peanuts, sunflower seeds, some oils, almonds, avocados, spinach, trout, beet greens, swiss chard, butternut squash',
    url: 'https://en.wikipedia.org/wiki/Vitamin_E',
  },

  {
    image: '../../assets/vit-k.jpg',
    name: 'Vitamin K',
    scientific_name: 'Phytomenadione',
    description:
      'Vitamin K refers to a group of fat-soluble vitamins that play a role in blood clotting, bone metabolism, and regulating blood calcium levels. Deficiency is rare, but, in severe cases, it can increase clotting time, leading to hemorrhage and excessive bleeding. Vitamin K1, or phylloquinone, comes from plants. It is the main type of dietary vitamin K. A lesser source is vitamin K2, or menaquinone, which occurs in some animal-based and fermented foods.',
    essential_for: 'Skin,Bones',
    foods:
      'green leafy vegetables, vegetable oils, meat, dairy products, eggs, soy beans',
    url: 'https://en.wikipedia.org/wiki/Vitamin_K',
  },
  {
    image: '../../assets/vit-c.jpg',
    name: 'Vitamin C',
    scientific_name: 'Ascorbic acid',
    description:
      'Vitamin C is a vital nutrient for health. It helps form and maintain bones, skin, and blood vessels. Vitamin C is water soluble, and the body does not store it. To maintain adequate levels of vitamin C, humans need a daily intake of food that contains it. Vitamin C plays an important role in a number of bodily functions including the production of collagen, L-carnitine, and some neurotransmitters. It helps metabolize proteins and its antioxidant activity may reduce the risk of some cancers. People with adequate levels of vitamin C are thought to be better able to fight off infections compared to people with vitamin C deficiency.',
    essential_for: 'Hair,Skin,Teeth,Immunity,Muscle,Covid-19 Fight,Growth',
    foods:
      'pepper, sweet, orange, strawberries, spinach, citrus fruits, tomatoes, potatoes',
    url: 'https://en.wikipedia.org/wiki/Vitamin_C',
  },
  {
    image: '../../assets/vit-b1.jpg',
    name: 'Vitamin B1',
    scientific_name: 'VitaminB-Thiamine',
    description:
      'Vitamin B1, thiamin, or thiamine, enables the body to use carbohydrates as energy. It is essential for glucose metabolism, and it plays a key role in nerve, muscle, and heart function. It is used to treat beriberi (a condition caused by prolonged lack of vitamin B1). Conditions such as Crohn’s disease, anorexia, alcoholism and kidney dialysis may lead to a thiamine deficiency. Research points to the potential role of thiamine in such diseases as diabetes, heart failure, Alzheimer’s disease and depression.',
    essential_for: 'Muscle,Nerve,Heart Function',
    foods:
      'cereals, nuts, whole grains, pulses, cauliflower, oranges, eggs, potatoes, asparagus, kale, white flour, white rice',
    url: 'https://en.wikipedia.org/wiki/B_vitamins',
  },
  {
    image: '../../assets/vit-b2.jpg',
    name: 'Vitamin B2',
    scientific_name: 'VitaminB-Riboflavin',
    description:
      'Vitamin B2, or riboflavin, is one of eight B vitamins that are essential for human health. It can be found in grains, plants, and dairy products. It is crucial for breaking down food components, absorbing other nutrients, and maintaining tissues. Some research suggests that vitamin B2 may help prevent cataracts and migraine headache, but further studies are needed to confirm this.',
    essential_for: 'Maintaining bodys energy supply',
    foods:
      'Fish, meat, and poultry, such as turkey, chicken, eggs, dairy products, asparagus, avocados, fortified cereals, lima beans, navy beans, and peas, molasses, mushrooms, nuts, parsley, pumpkins, rosehips, sweet potatoes, cruciferous vegetables, such as broccoli, Brussels sprouts, spinach, whole-grain breads, enriched breads, and wheat bran',
    url: 'https://en.wikipedia.org/wiki/B_vitamins',
  },
  {
    image: '../../assets/vit-b3.jpg',
    name: 'Vitamin B3',
    scientific_name: 'VitaminB-Niacinamide/niacin',
    description:
      'Vitamin B-3, also known as niacin, is one of eight B vitamins. It plays a role in converting the food we eat into energy. It helps the body to use proteins and fats, and it keeps the skin, hair, and nervous system healthy. Other possible benefits of vitamin B-3 stem from its potential cholesterol-lowering, antioxidative, and anti-inflammatory properties. Other names for vitamin B-3 include nicotinamide, nicotinic acid, and vitamin PP, because it prevents pellagra.',
    essential_for: 'Hair',
    foods: 'chicken breast,turkey breast, salmon, brown rice, cereal, peanuts',
    url: 'https://en.wikipedia.org/wiki/B_vitamins',
  },
  {
    image: '../../assets/vit-b5.jpg',
    name: 'Vitamin B5',
    scientific_name: 'VitaminB-Dexpanthenol',
    description:
      'Vitamin B5 is a water-soluble vitamin from the B group of vitamins. It helps produce energy by breaking down fats and carbohydrates. It also promotes healthy skin, hair, eyes, and liver. People need B5 to synthesize and metabolize fats, proteins, and coenzyme A. B5 is one of the less known vitamins, possibly because deficiencies of it are rare. Vitamin B5 has many important functions. These include converting food into glucose synthesizing cholesterol forming red blood cells',
    essential_for: 'Blood',
    foods:
      'chicken, Salmon, lobster, and shellfish, whole grain breads and cereals. Whole grains, egg yolk, milk, yogurt, and milk products, lentils, split peas, and soybeans, mushrooms, avocado, broccoli, sweet potatoes, corn, cauliflower, kale, and tomatoes. Other sources include peanuts, sunflower seeds, wheat germ,',
    url: 'https://en.wikipedia.org/wiki/B_vitamins',
  },
  {
    image: '../../assets/vit-b6.jpg',
    name: 'Vitamin B6',
    scientific_name: 'VitaminB-Pyridoxine',
    description:
      'Vitamin B6 is one of the B vitamins that benefits the central nervous system. It is involved in producing the neurotransmitters serotonin and norepinephrine, and in forming myelin. Other functions of pyridoxine include protein and glucose metabolism, and the manufacture of hemoglobin. It carries oxygen. Vitamin B6 is also involved in keeping the lymph nodes, thymus and spleen healthy. It may help boost brain performance and it is needed for neuron transmission in the brain.',
    essential_for: 'Memory,Immunity,Muscle,Blood',
    foods:
      'chick peas, chicken breast, banana, tofu, avocados, brown rice, carrots, fish, cereal, milk, pork, potato, seeds, soy beans, spinach, turkey, whole grains',
    url: 'https://en.wikipedia.org/wiki/B_vitamins',
  },
  {
    image: '../../assets/vit-b7.jpg',
    name: 'Vitamin B7',
    scientific_name: 'VitaminB-Biotin',
    description:
      'Biotin, also known as vitamin H or B7, is a water-soluble vitamin that helps the body metabolize fats, carbohydrates, and protein. It cannot be synthesized by human cells, but it is produced by bacteria in the body, and it is present in numerous foods.Biotin therapy may help treat some medical conditions. Some people take supplements to strengthen their nails and hair, but there is a lack of evidence supporting this use. Mild biotin deficiency is often seen during pregnancy.',
    essential_for: 'Nervous system,Liver metabolism',
    foods:
      'red meat, liver, eggs, nuts, potato, almonds, sunflower seeds, cheese',
    url: 'https://en.wikipedia.org/wiki/B_vitamins',
  },
  {
    image: '../../assets/vit-b9.jpg',
    name: 'Vitamin B9',
    scientific_name: 'VitaminB-Folic acid',
    description:
      'Folic acid is the synthetic form of folate, which is a naturally occurring B vitamin. Folate helps make DNA and other genetic material. It is especially important in prenatal health. It helps the body make healthy new red blood cells, for example. Red blood cells carry oxygen throughout the body. If the body does not make enough of these, a person can develop anemia, leading to fatigue, weakness, and a pale complexion.',
    essential_for: 'During Pregnancy,Muscle',
    foods:
      'spinach, asparagus, brussels sprouts, lettuce, avocado, broccoli, mustard greens, green peas, kidney beans, tomato, crab, orange, peanuts, grapefruit, papaya, banana, hard-boiled egg',
    url: 'https://en.wikipedia.org/wiki/B_vitamins',
  },
  {
    image: '../../assets/vit-b12.jpg',
    name: 'Vitamin B12',
    scientific_name: 'VitaminB-Cyanocobalamin',
    description:
      'Vitamin B-12 is a crucial B vitamin. It is needed for nerve tissue health, brain function, and the production of red blood cells. Cobalamin is another name for vitamin B-12. Deficiency can result when levels of vitamin B-12 are too low. This can lead to irreversible neurological symptoms. Vitamin B-12 is important for brain function the synthesis of red blood cells. Deficiency of vitamin B-12 can lead to neurological difficulties and anemia.',
    essential_for: 'Memory,Growth,Muscle,Blood',
    foods: 'poultry, fish, milk, cheese, yogurt, eggs',
    url: 'https://en.wikipedia.org/wiki/B_vitamins',
  },
  {
    image: '../../assets/minerals.jpg',
    name: 'Minerals',
    scientific_name: 'Minerals',
    description:
      'Much like vitamins, minerals help support the body. They’re essential for many body functions, including building strong bones and teeth, regulating your metabolism, and staying properly hydrated. Some of the most common minerals are calcium, iron, and zinc.',
    essential_for: 'Hair,Teeth,Bones,Growth,During Pregnancy',
    foods:
      'red meat, sea food, salt, milk, fruits, whole grains, bread, cereals, beans, legumes',
    url: 'https://en.wikipedia.org/wiki/Mineral_(nutrient)',
  },
  {
    image: '../../assets/protein.jpg',
    name: 'Protein',
    scientific_name: 'Protein',
    description:
      'Protein provides the building blocks of the body, and not just for muscle. Every cell, from bone to skin to hair, contains protein. A startling 16 percent of the average person’s body weight is from protein. Protein is used primarily for growth, health, and body maintenance. All of your hormones, antibodies, and other important substances are composed of protein. Protein is not used to fuel the body unless necessary.',
    essential_for: 'Stamina',
    foods:
      'red meat, poultry, turkey, fish, beans, legumes, eggs, dairy products, soy, nuts, grains',
    url: 'https://en.wikipedia.org/wiki/Protein_(nutrient)',
  },
  {
    image: '../../assets/fat.jpg',
    name: 'Fats',
    scientific_name: 'Fats',
    description:
      'People often associate high fat foods with bad health. However, a person needs certain fats to help maintain optimal health. Fats provide the body with energy and help it carry out a range of functions. However, it is essential to consume healthful fats, such as monounsaturated and polyunsaturated fats and limit or avoid saturated and trans fats. Healthful fats help with the following functions:cell growth,blood clotting,building new cells.',
    essential_for: 'Brain development,Blood clotting',
    foods: 'nuts, fish, vegetable oils, coconut oil, seeds',
    url: 'https://en.wikipedia.org/wiki/Fat',
  },
  {
    image: '../../assets/carbohydrates.jpg',
    name: 'Carbohydrates',
    scientific_name: 'Carbohydrates',
    description:
      'Carbohydrates are essential to the body. They are sugars or starches that provide energy for all the cells and tissues in the body. There are two different types of carbohydrates: simple and complex. People should limit their intake of simple carbohydrates. However, the body needs complex carbohydrates to support the following:the immune system,brain function,the nervous system,energy to perform tasks,digestive function',
    essential_for: 'Glucose',
    foods:
      'whole grains, beans, vegetables, fruits, sugar, barley, brown rice, bread, oat meal',
    url: 'https://en.wikipedia.org/wiki/Carbohydrate',
  },
];
