var VDragJCnt=0;
class VDragJ {
    constructor(option={}){
        let format="text/plain";
        let callback=null;
        if("format" in option)format=option["format"];
        if("callback" in option)callback=option["callback"];
        if("fmt" in option)format=option["fmt"];
        if("cb" in option)callback=option["cb"];

        let _self = this;
        _self.progname = _self.constructor.name;
        _self.format = format;
        _self.callback = callback;
    }
    addDragID(id,option={}){
        this.addDragEl(document.getElementById(id),option);
    }
    addDragEl(el,option={}){
        let _self = this;
        let format=_self.format
        if("format" in option)format=option["format"];
        if("f" in option)format=option["f"];
        el.setAttribute("style", "draggable: true;");
        el.addEventListener('dragstart', e=>{
            _self.dragStart(e,format)
        })
    }
    removeDragID(id){
        this.removeDragEl(document.getElementById(id));
    }
    removeDragEl(el){
        let _self = this;
        el.setAttribute("style", "draggable: false;");
        el.removeEventListener('dragstart');
    }
    addDropID(id,option={}){
        this.addDropEl(document.getElementById(id),option);
    }
    addDropEl(el,option={}){
        let _self = this;
        el.addEventListener('drop', e=>{_self.dropped(e)})
        el.addEventListener('dragenter', e=>{_self.cancelDefault(e)})
        el.addEventListener('dragover', e=>{_self.cancelDefault(e)})
    }
    removeDropID(id){
        this.removeDropEl(document.getElementById(id));
    }
    removeDropEl(el){
        let _self = this;
        el.removeEventListener('drop');
        el.removeEventListener('dragenter');
        el.removeEventListener('dragover');
    }
    dragStart(e,format){
        e.dataTransfer.setData(format, e.target.id)
    }
    dropped (e) {
        let _self = this;
        // console.log('dropped')
        _self.cancelDefault(e)
        if(_self.callback!=null && typeof _self.callback=="function"){
            _self.callback(e);
        }
    }
    moveEl(e){
        let _self = this;
        let id = e.dataTransfer.getData(_self.format)
        e.target.appendChild(document.querySelector('#' + id))
    }
    cancelDefault (e) {
        let _self = this;
        e.preventDefault()
        e.stopPropagation()
        return false
    }





    _CreatWorkDiv(head="",append="body"){
        let _self = this;
        let workdiv_id=head+"_Workdiv"+_self._GetId();
        let s=document.createElement('div');
        s.setAttribute("id", workdiv_id);
        s.style.cssText="display:none";
        if(append==null || typeof append!="string" || append=="" || append=="body") document.body.appendChild(s);
        else document.getElementById(append).appendChild(s);
        return workdiv_id;
    }
    _GetId(){
        return (VDragJCnt++)+"_"+new Date().getTime();
    }
}