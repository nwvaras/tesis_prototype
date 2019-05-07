export default function hasFeature(id,node){
        if(node.id === id){
            return node.selected
        }else{
            if(node.children){

                return node.children.some( (child) => {
                    return hasFeature(id,child)
                })
            }
        }
        return false


    }