import roles from "../context/roles";

const permissions = {
    [roles.ADMIN]: ['add', 'edit', 'delete', 'view'],
    [roles.EDITOR]: ['edit', 'delete', 'view'],
    [roles.VIEWER]: ['view']
}

export default permissions;
