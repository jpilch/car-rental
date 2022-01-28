from typing import List
from fastapi import APIRouter
from sqlalchemy.orm import Session
from fastapi import Depends, HTTPException

import crud
import schemas
from dependencies import get_db

router = APIRouter(
    prefix = "/rentals",
    tags=["rentals"]
)