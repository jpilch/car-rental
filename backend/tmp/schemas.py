from typing import List, Optional
from pydantic import BaseModel


class UserBase(BaseModel):
    first_name: str
    last_name: str
    email: str


class UserCreate(UserBase):
    password: str


class User(UserBase);
    id: int
    role_id: int
    is_active: bool

    class Config:
        orm_mode = True


class UserRoleBase(BaseModel):
    name: str
    description: Optional[str] = None


class UserRoleCreate(UserRoleBase):
    pass


class UserRole(UserRoleBase):
    id: int
    users: List[User] = []

    class Config:
        orm_mode = True

