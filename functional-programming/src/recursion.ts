import { Category } from "monocle-ts/lib/Traversal";

const countDownFrom = (num: number) => {
    if(isNaN(num) || num <= 0) return;

    console.log(num);
    countDownFrom(num - 1)
}
countDownFrom(10);

type Category = { id: string, parent: string | null };
type CategoriesList = Category[];

const petCategories: CategoriesList = [
    { id: 'animals', 'parent': null},
    { id: 'mammals', 'parent': 'animals'},
    { id: 'cats', 'parent': 'mammals'},
    { id: 'dogs', 'parent': 'mammals'},
    { id: 'chihuahua', 'parent': 'dogs'},
    { id: 'black chihuahua', 'parent': 'chihuahua'}, 
    { id: 'siamese', 'parent': 'cats'},
];

const makeTree = (categories: CategoriesList, actualParent: string | null): any => {
    let node = {};
    categories
        .filter(animal => animal.parent === actualParent)
        .forEach((child: Category) => node[child.id] = makeTree(petCategories, child.id))
    
    return node || null;
}

console.log(
    JSON.stringify(makeTree(petCategories, null), null, 2)
);