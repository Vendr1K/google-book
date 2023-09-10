export function filterStateForDuplicate (state: any[]) {
    const res = state.reduce((o, i) => {
        if (!o.find((v:any) => v.id === i.id)) {
          o.push(i);
        }
        return o;
      }, []);
    return res;
};