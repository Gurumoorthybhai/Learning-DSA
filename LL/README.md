LL - Linked List


Array

insertion & deletion is expensive
update & retrieve - efficient

Singly Linked List

insert at end       - point last element with new element    O(1)
delete from end     - we need to loop from Head first     O(n)
insert at first     - update head with new element           O(1)
delete from first   - update head to next element            O(1)
insert at specific index - we need to loop from Head           O(n)


                                        LL                  Array

push                             -      O(1)                O(1)
pop                              -      O(n)                O(1)
shift                            -      O(1)                O(n)
unshift                          -      O(1)                O(n)
insert at specific position      -      O(n)                O(n)
delete from specific position    -      O(n)                O(n)
lookup by index                  -      O(n)                O(1)
lookup by value                  -      O(n)                O(n)