<?php

namespace SYSTEM\SECURITY;

class RIGHTS {
    //Never use anything with 0 in php
    const SYS_DONOTUSE = 0;
    //System Administrator Interface
    const SYS_SAI = 1;

    //Reserve first 1000 ids.
    const RESERVED_SYS_0_999 = 999;
}