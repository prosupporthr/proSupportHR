import { shopcategories } from '~/assets/databank/shop';  

export function findImageBySimilarName(searchText: string) {
    const lowerSearchText = searchText.toLowerCase().trim(); 
    
    const foundCategory = shopcategories.find(category => 
        category.name.toLowerCase().includes(lowerSearchText) ||
        lowerSearchText.includes(category.name.toLowerCase())
    );

    return foundCategory ? foundCategory.image : "";
}