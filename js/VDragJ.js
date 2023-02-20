var VDragJCnt=0;
var onVDrag="onVDrag";
var onVDrop="onVDrop";
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
    addDragElA(elA,option={}){
        let _self = this;
        if(typeof elA=="object"){
            for(let i=0;i<elA.length;i++){
                let el=elA[i];
                _self.addDragEl(el,option={})
            }
        }
    }
    addDragEl(el,option={}){
        let _self = this;
        if(typeof el=="object" && typeof el.length !="undefined")return _self.addDragElA(el,option);
        el.setAttribute("style", "draggable: true;");
        el.addEventListener('dragstart', e=>{
            _self.dragStart(e)
        })
    }

    removeDragID(id){
        this.removeDragEl(document.getElementById(id));
    }
    removeDragElA(elA){
        let _self = this;
        if(typeof elA=="object"){
            for(let i=0;i<elA.length;i++){
                let el=elA[i];
                _self.removeDragEl(el)
            }
        }
    }
    removeDragEl(el){
        let _self = this;
        if(typeof el=="object" && typeof el.length !="undefined")return _self.removeDragElA(el);
        el.setAttribute("style", "draggable: false;");
        el.removeEventListener('dragstart',null);
    }
    addDropID(id,option={}){
        this.addDropEl(document.getElementById(id),option);
    }
    addDropElA(elA,option={}){
        let _self = this;
        if(typeof elA=="object"){
            for(let i=0;i<elA.length;i++){
                let el=elA[i];
                _self.addDropEl(el,option={})
            }
        }
    }
    addDropEl(el,option={}){
        let _self = this;
        if(typeof el=="object" && typeof el.length !="undefined")return _self.addDropElA(el,option);
        el.addEventListener('drop', e=>{_self.dropped(e)})
        el.addEventListener('dragenter', e=>{_self.cancelDefault(e)})
        el.addEventListener('dragover', e=>{_self.cancelDefault(e)})
    }
    removeDropID(id){
        this.removeDropEl(document.getElementById(id));
    }
    removeDropElA(elA){
        let _self = this;
        if(typeof elA=="object"){
            for(let i=0;i<elA.length;i++){
                let el=elA[i];
                _self.removeDropEl(el)
            }
        }
    }
    removeDropEl(el){
        let _self = this;
        if(typeof el=="object" && typeof el.length !="undefined")return _self.removeDropElA(el);
        el.removeEventListener('drop',null);
        el.removeEventListener('dragenter',null);
        el.removeEventListener('dragover',null);
    }
    dragStart(e){
        //e.dataTransfer.setData(format, e.target.id)
        let _self = this;
        if(_self.callback!=null && typeof _self.callback=="function"){
            _self.callback(onVDrag,e);
        }
    }
    dropped (e) {
        let _self = this;
        // console.log('dropped')
        _self.cancelDefault(e)
        if(_self.callback!=null && typeof _self.callback=="function"){
            _self.callback(onVDrop,e);
        }
    }
    moveElStart(e){
        let _self = this;
        e.dataTransfer.setData(_self.format, e.target.id);
    }
    moveElEnd(e){
        let _self = this;
        let id = e.dataTransfer.getData(_self.format);
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