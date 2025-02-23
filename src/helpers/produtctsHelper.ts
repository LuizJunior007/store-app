export const formatPrice = ( price:number = 0 ) => {

    if(typeof price === 'number'){

        return price.toLocaleString("pt-br", {
            style: 'currency',
            maximumFractionDigits: 2,
            currency: 'BRL'
        });

    }

}

export const formatUrl = ( url:string ) : string => {

    return url.replace(/ /g, '_');
}

export const handleFormatTitle = ( title:string = "" ) : string => {

    return title.replace('_', ' ');

}

