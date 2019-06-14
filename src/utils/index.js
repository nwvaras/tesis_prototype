export default function hasFeature(id,node,parent=null){
        if(node.id === id){
            return (node.selected && (parent!==null? getParentSelected(parent): true))
        }else{
            if(node.children){

                return node.children.some( (child) => {
                    return hasFeature(id,child,node)
                })
            }
        }

        return false


    }
function getParentSelected(parent){
    return parent.selected
}
