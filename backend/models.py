from sqlalchemy import Boolean, Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship

from .database import Base


class User(Base):
    __tablename__ = "user"

    id = Column(Integer, primary_key=True, index=True)
    role_id = Column(Integer, ForeignKey("role.id"))
    username = Column(String(16), unique=True)
    email = Column(String(32), unique=True, index=True)
    password = Column(String(128))
    is_active = Column(Boolean, default=True)

    role = relationship("Role", back_populates="users")


class Role(Base):
    __tablename__ = "role"

    name = Column(String(16))
    description = Column(String(32))

    users = relationship("User", back_populates="role")
